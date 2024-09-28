<script>
import axios from 'axios';
import moment from 'moment';
import tinycolor from 'tinycolor2';

export default {
    name: "ChatHistory",
    components: {},
    data: ()=>( {
        client_id: 'icyqwwpy744ugu5x4ymyt6jqrnpxso',
        gql_id: 'kd1unb4b3q4t58fwlpcbzcbnm76a8fp',
        global_twitch: {},
        global_bttv: {},
        twitch_badges: {},
        channel_twitch_emotes: {},
        channel_cheers: {},
        channel_bttv: {},
        code: "",
        username: "",
        user_id: 0,
        user_changed: false,
        vod_filter: "",
        start_filter: "",
        end_filter: "",
        user_filter: "",
        message_filter: "",
        vods: [],
        selected_vod: 0,
        filtered_vods: [],
        comment_offset: 0,
        comment_chunk_counter: 0,
        comments: [],
        cancel_comment_fetch: false,
        comment_fetch_in_progress: false,
        select_size: window.innerHeight < 800 ? 0 : 20
    }),
    methods: {
        handleWindowResize() {
            if (this.timeout) 
                clearTimeout(this.timeout); 
            this.timeout = setTimeout(() => {
                if(this.isMobile())
                    this.select_size = 0;
                else
                    this.select_size = window.innerHeight < 800 ? 0 : 20;
            }, 100); 
        },
        isMobile() {
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
                return true
             return false
        },
        formatDate(value) {
            if (value) 
                return moment(String(value)).format('YYYY-MM-DD');
        },
        formatTime(value) {
            if (value) 
                return moment(String(value)).format('hh:mm:ss A');
        },
        getColor(original) {
            if(!original)
                return "hsl(264, 100%, 75%)";

            let color = tinycolor(original);
            if(color.isDark())
                return color.brighten(25).toHexString();

            return original;    
        },
        parseBits(text) {
            for(let cheer of this.channel_cheers) {
                if (text.toLowerCase().includes(cheer.prefix.toLowerCase())) {
                    let amount = Number(text.substr(cheer.prefix.length));
                    for(let i=cheer.tiers.length-1; i >= 0; i--) {
                        let title = cheer.prefix + cheer.tiers[i].min_bits;
                        if (amount >= cheer.tiers[i].min_bits) 
                            return `<div class="inline"><img class="inline" src="${cheer.tiers[i].images.dark.animated["2"]}" alt="${title}" title="${title}" height="28" width="28"><span class="font-semibold" style="color: ${cheer.tiers[i].color}">${amount}<span></div>`;
                    }
                }
            }
            return text;
        },
        parseBttv(text) {
            if (this.isIterable(this.global_bttv)) {
                for(let bttv of this.global_bttv) {
                    if (text === bttv.code) 
                        return `<img class="inline" src="https://cdn.betterttv.net/emote/${bttv.id}/2x" alt="${bttv.code}" title="${bttv.code}" height="28" width="28">`;
                }
            }
            if (this.isIterable(this.channel_bttv)) {
                for(let bttv of this.channel_bttv) {
                    if (text === bttv.code) 
                        return `<img class="inline" src="https://cdn.betterttv.net/emote/${bttv.id}/2x" alt="${bttv.code}" title="${bttv.code}" height="28" width="28">`;
                }
            }
            return text;
        },
        isIterable(obj) {
            // checks for null and undefined
            if (obj == null) {
                return false;
            }
            return typeof obj[Symbol.iterator] === 'function';
        },
        parseEmotes(message) {
            for(let fragment of message.fragments) {
                if (!fragment.emoticon) {
                    let items = [];
                    for (let item of fragment.text.split(" ")) {
                        let text = item;

                        if (message.bits_spent) 
                            text = this.parseBits(item);

                        text = this.parseBttv(text);

                        items.push(text);
                    }
                    fragment.text = items.join(" ");
                }
                else {
                    fragment.emoticon.format = 'static';
                    if (Object.keys(this.channel_twitch_emotes).length > 0) {
                        let emote = this.channel_twitch_emotes.find(x => x.id === fragment.emoticon.emoticon_id);
                        if (emote && emote.format.length > 1) 
                            fragment.emoticon.format = 'animated';
                    }
                }
            }
            return message.fragments;
        },
        filterVods(event) {
            if (this.timeout) 
                clearTimeout(this.timeout); 
            this.timeout = setTimeout(() => {

                // needed for input change detection on mobile
                if (event.target.id === 'vod-filter')
                    this.vod_filter = event.target.value;
                else if (event.target.id === 'start-time')
                    this.start_time = event.target.value;
                else if (event.target.id === 'end-time')
                    this.end_time = event.target.value;

                this.$refs.vodSelect[0].selected = true;
                this.filtered_vods = this.vods.filter(this.compareVod);
            }, 200); 
        },
        compareVod(vod) {
            if (!vod.title.toLowerCase().includes(this.vod_filter.toLowerCase()) && this.vod_filter !== "")
                return false;
            if (moment(vod.created_at).isBefore(this.start_filter) && this.start_filter !== "")
                return false;
            if (moment(vod.created_at).isAfter(this.end_filter) && this.end_filter !== "")
                return false;
            return true;
        },
        filterComments(event) {
            if (this.timeout) 
                clearTimeout(this.timeout); 

            this.timeout = setTimeout(() => {
                
                // needed for input change detection on mobile
                if (event.target.id === 'user-filter')
                    this.user_filter = event.target.value.trim();
                else if (event.target.id === 'message-filter')
                    this.message_filter = event.target.value;

                this.reloadComments();
            }, 500); 
        },
        async loadComments($state) {
            if (this.selected_vod === 0) {
                $state.complete();
                return;
            }
            if (this.comment_fetch_in_progress) {
                this.cancel_comment_fetch = true;
                while (this.comment_fetch_in_progress)
                    await new Promise(r => setTimeout(r, 1000));
                this.comments = [];
                this.comment_offset = 0;
                this.comment_chunk_counter = 0;
            }

            const headers = { 'Client-ID': this.gql_id };
            let hasNextPage = true;
            let previous = this.comment_offset;
            this.comment_fetch_in_progress = true;

            do {
                previous = this.comment_offset;

                const postData = [{
                    "operationName": "VideoCommentsByOffsetOrCursor",
                    "variables": {
                        "videoID": this.selected_vod,
                        "contentOffsetSeconds": this.comment_offset > 0 ? this.comment_offset + 1 : this.comment_offset
                    },
                    "extensions": {
                        "persistedQuery": {
                            "version": 1,
                            "sha256Hash": "b70a3591ff0f4e0313d126c6a1502d79a1c02baebb288227c582044aa76adf6a"
                        }
                    }
                }]

                const res = await axios.post("https://gql.twitch.tv/gql", postData, { headers });
                if (res.data[0] && res.data[0].data.video.comments !== null) {
                    for (let comment of res.data[0].data.video.comments.edges) {
                        if (this.comment_offset >= comment.node.contentOffsetSeconds) continue;
                        this.comment_offset = comment.node.contentOffsetSeconds;
                        const node = comment.node;
                        if (!this.compareComment(comment)) continue;
                        this.comments.push({
                            created_at: node.createdAt, 
                            username: node.commenter.login, 
                            displayname: node.commenter.displayName,
                            user_badges: node.message.userBadges,
                            fragments: node.message.fragments, 
                            user_color: this.getColor(node.message.userColor),
                            vod_link: `https://www.twitch.tv/videos/${this.selected_vod}?t=${Math.floor(this.comment_offset/3600)}h${Math.floor(this.comment_offset/60%60)}m${Math.floor(this.comment_offset%60)}s` 
                        });
                    }
                    hasNextPage = res.data[0].data.video.comments.pageInfo.hasNextPage;
                } 

                if (this.comments.length > (this.comment_chunk_counter*500 + 500)){
                    this.comment_chunk_counter += 1;
                    break;
                }
            } while (this.comment_offset === previous && !this.cancel_comment_fetch && hasNextPage)

            this.comment_fetch_in_progress = false;
            this.cancel_comment_fetch = false;
        },
        compareComment(comment) {
            if (!comment.node.commenter.displayName.toLowerCase().includes(this.user_filter.toLowerCase()) && this.user_filter !== "")
                return false;

            let message = "";
            for (let fragment of comment.node.message.fragments) 
                message += fragment.text;

            if (!message.toLowerCase().includes(this.message_filter.toLowerCase()) && this.message_filter !== "")
                return false;

            return true;
        },
        async getUserId() {
            const headers = {
                'Client-ID': this.client_id,
                'Authorization': 'Bearer ' + this.code
            };
            const res = await axios.get(`https://api.twitch.tv/helix/users?login=${this.username}`, { headers });
            return res.data.data[0].id;
        },
        async getVods() {
            let id = await this.getUserId();
            if (id !== this.user_id) {
                this.user_id = id;
                this.user_changed = true;
            }
            var cursor = "";
            this.vods = [];
            this.filtered_vods = [];

            do {
                const headers = {
                    'Client-ID': this.client_id,
                    'Authorization': 'Bearer ' + this.code
                };
                const res = await axios.get(`https://api.twitch.tv/helix/videos?user_id=${this.user_id}&first=100&after=${cursor}`, { headers });
                var data = res.data.data.map(v => ({id: v.id, created_at: v.created_at, title: v.title }));
                this.vods.push(...data);
                this.filtered_vods.push(...data.filter(this.compareVod));
                if(res.data.pagination.cursor) cursor = res.data.pagination.cursor;
                else break;
            } while (cursor)
        },
        getBadge(badge) {
            for (let channel_badge of this.twitch_badges) {
                if (badge.setID === channel_badge.set_id) {
                    for(let version of channel_badge.versions) {
                        if (badge.version === version)
                            return channel_badge;
                    }
                }
            }
            return null;
        },
        reloadComments() {
            this.comments = [];
            this.comment_offset = 0;
            this.comment_chunk_counter = 0;

            if (this.user_changed) {
                const headers = {
                    'Client-ID': this.client_id,
                    'Authorization': 'Bearer ' + this.code
                };
                axios.get(`https://api.twitch.tv/helix/chat/badges/?broadcaster_id=${this.user_id}`, { headers })
                .then(results => {
                    this.twitch_badges = results.data.data;
                    this.twitch_badges.push(...this.global_twitch);
                });
                axios.get(`https://api.twitch.tv/helix/chat/emotes?broadcaster_id=${this.user_id}`, { headers })
                .then(results => {
                    this.channel_twitch_emotes = results.data.data;
                });
                axios.get(`https://api.twitch.tv/helix/bits/cheermotes?broadcaster_id=${this.user_id}`, { headers })
                .then(results => {
                    this.channel_cheers = results.data.data;
                });
                axios.get(`https://api.betterttv.net/3/cached/users/twitch/${this.user_id}`)
                .then(results => {
                    this.channel_bttv = results.data.channelEmotes;
                    this.channel_bttv.push(...results.data.sharedEmotes);
                }).catch(error => {
                    console.error(`Unabled to obtain bttv emotes for channel`);
                    console.error(error.response);
                });
                this.user_changed = false;
            }

            this.loadComments();
        },
        handleScroll() {
            if (this.timeout) 
                clearTimeout(this.timeout); 
            this.timeout = setTimeout(() => {
                let element = document.getElementById("comment-container");
                if (element.scrollTop >= (element.scrollHeight - element.offsetHeight))
                    this.loadComments();
            }, 100); 
        }
    },
    created() {
        const code = new URLSearchParams(window.location.search).get('code');
        const token = new URLSearchParams(window.location.hash.substring(1)).get('access_token');
        if (code) this.code = code;
        else if (token) this.code = token;

        const headers = {
            'Client-ID': this.client_id,
            'Authorization': 'Bearer ' + this.code
        };
        axios.get('https://api.twitch.tv/helix/chat/badges/global', { headers })
             .then(results => {
                 this.global_twitch = results.data.data;
             });
        axios.get('https://api.betterttv.net/3/cached/emotes/global')
             .then(results => {
                 this.global_bttv = results.data;
             });

        window.addEventListener("resize", this.handleWindowResize);
        this.handleWindowResize();
    },
    destroyed() {
        window.removeEventListener("resize", this.handleWindowResize);
    },
    mounted() {
        let element = document.getElementById("comment-container");
        element.addEventListener("scroll", this.handleScroll);
    },
    unmounted() {
        let element = document.getElementById("comment-container");
        element.removeEventListener("scroll", this.handleScroll)
    }
}

</script>

<template>
    <div class="flex flex-wrap h-full w-full text-white p-2">
        <div class="flex flex-col h-1/3 w-full xl:w-1/3 xl:h-full border-gray-600 pb-2 xl:pb-0 xl:pr-2">
            <div class="flex flex-wrap gap-2 min-w-full">
                <div class="flex gap-2 min-w-full max-h-full pb-2">
                    <a v-bind:href="`https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${client_id}&redirect_uri=https://encrypted-thoughts.github.io/chat-history`" :class="code ? '' : 'animate-pulse'" class="w-1/4 text-center bg-gray-900 border-2 border-gray-600 hover:bg-gray-700 font-bold py-2 px-1 shadow-lg rounded-md">
                        <span class="text-xs md:text-base xl:text-lg" v-show="!code">ALLOW ACCESS</span>
                        <span class="text-xs md:text-base xl:text-lg" v-show="code">ALLOWED <font-awesome-icon icon="check" class="text-green-600"/></span>
                    </a>
                    <input @input="evt => username=evt.target.value.trim()" v-model.trim="username" type="text" class="form-input border-2 border-gray-600 focus:outline-none focus:ring-0 focus:border-green-700 bg-gray-900 px-3 py-2 rounded-md w-2/4" placeholder="Enter a username..."/>
                    <button @click="getVods()" :disabled="!username || !code" class="bg-gray-900 border-2 border-gray-600 hover:bg-gray-700 font-bold py-2 px-1 shadow-lg rounded-md w-1/4 disabled:opacity-50">
                        <span class="text-xs md:text-base xl:text-lg">VODS <font-awesome-icon icon="search"/></span>
                    </button>
                </div>
            </div>
            <div class="flex min-w-full">
                <input @input="filterVods($event)" id="vod-filter" v-model="vod_filter" type="text" class="w-1/3 border-2 border-gray-600 focus:outline-none focus:ring-0 focus:border-green-700 form-input bg-gray-900 px-3 py-2 rounded-tl-md disabled:opacity-50" placeholder="Filter on VOD name..."/>
                <input @input="filterVods($event)" id="start-time" v-model="start_filter" type="datetime-local" :class="start_filter ? '' : 'start-time'" class="w-1/3 flex-1 border-2 border-gray-600 form-input focus:outline-none focus:ring-0 focus:border-green-700 bg-gray-900 px-3 py-2 disabled:opacity-50" placeholder="Start time filter..."/>
                <input @input="filterVods($event)" id="end-time" v-model="end_filter" type="datetime-local" :class="end_filter ? '' : 'end-time'" class="w-1/3 flex-1 border-2 border-gray-600 form-input focus:outline-none focus:ring-0 focus:border-green-700 bg-gray-900 px-3 py-2 rounded-tr-md disabled:opacity-50" placeholder="End time filter..."/>
            </div>
            <select ref="vodSelect" @change="reloadComments" v-model="selected_vod" :disabled="vods.length === 0" :size="select_size" :class="select_size > 0 ? 'bg-none p-0' : ''" class="focus:outline-none focus:ring-0 focus:border-green-800 h-full w-full border-2 border-gray-600 bg-gray-900 rounded-b-md scrollbar-thin scrollbar-thumb-green-900 hover:scrollbar-thumb-green-800 scrollbar-track-gray-500 break-words whitespace-normal">
                <option ref="defaultOption" value="" disabled hidden selected class="rounded-sm even:bg-gray-800 w-full p-1 pl-3">Select a vod...</option>
                <option v-for="vod in filtered_vods" :value="vod.id" class="rounded-sm even:bg-gray-800 w-full p-1 pl-3">
                    {{ formatDate(vod.created_at) }}: {{vod.title}}
                </option>
            </select>
        </div>
        <div class="flex flex-col h-2/3 w-full xl:w-2/3 xl:h-full">
            <div class="flex w-full">
                <input @input="filterComments($event)" id="user-filter" v-model.trim="user_filter" type="text" class="w-1/2 form-input focus:outline-none focus:ring-0 focus:border-green-700 bg-gray-900 border-2 border-gray-600 rounded-tl-md" placeholder="Filter on username..."/>
                <input @input="filterComments($event)" id="message-filter" v-model="message_filter" type="text" class="w-1/2 form-input focus:outline-none focus:ring-0 focus:border-green-700 bg-gray-900 border-2 border-gray-600 rounded-tr-md" placeholder="Filter on message..."/>
            </div>
            <div id="comment-container" class="h-full scrollbar-thin scrollbar-thumb-green-900 scrollbar-track-gray-500 scrollbar scrollbar-thumb-green-900 hover:scrollbar-thumb-green-800 scrollbar-track-gray-500 border-2 border-gray-600 bg-gray-900 rounded-b-md overflow-y-auto">
                <div v-for="comment in comments" class="even:bg-gray-800 px-3 py-1 w-full">
                    <a class="inline text-gray-400 pr-1" :href="comment.vod_link" target="_blank" rel="noopener noreferrer">{{formatTime(comment.created_at)}}</a>
                    
                    <div class="inline text-center" v-for="badge in comment.user_badges">
                        <template v-for="channel_badge in twitch_badges">
                            <template v-if="channel_badge.set_id === badge.setID">
                                <template v-for="version in channel_badge.versions">
                                    <img class="inline pr-1" v-if="version.id === badge.version" :src="version.image_url_2x" :alt="version.title" :title="version.title" height="28" width="28">
                                </template>
                            </template>
                        </template>
                    </div>
                    
                    <a class="inline" :style="{ color: comment.user_color }" :href="`https://www.twitch.tv/${comment.username}`" target="_blank" rel="noopener noreferrer">{{comment.displayname}}{{ comment.displayname.toLowerCase() === comment.username.toLowerCase() ? "" : " (" + comment.username + ")"}}</a>
                    
                    <span class="inline">: </span>
                    
                    <div class="inline text-center" v-for="fragment in comment.fragments">
                        <img class="inline" v-if="fragment.emote" :src="`https://static-cdn.jtvnw.net/emoticons/v2/${fragment.emote.emoteID}/default/dark/2.0`" :alt="fragment.text" :title="fragment.text" height="28" width="28">
                        <div class="inline text-white" v-else v-html="fragment.text"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
::-webkit-calendar-picker-indicator { filter: invert(1); }

::-moz-selection { @apply bg-green-900; }
::selection { @apply bg-green-900; }

option:checked { 
    @apply bg-green-800;
    @apply text-white;
}

.start-time:before{
    content: 'Filter on start time...';
    text-align: left;
    width:100%;
    color: gray;
    white-space: nowrap;
}

.end-time:before {
    content: 'Filter on end time...';
    text-align: left;
    width:100%;
    color: gray;
    white-space: nowrap
}

</style>
