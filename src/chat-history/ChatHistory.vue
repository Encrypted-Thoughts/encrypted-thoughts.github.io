<script>
import axios from 'axios';
import moment from 'moment';

export default {
    name: "ChatHistory",
    data: ()=>( {
        client_id: 'icyqwwpy744ugu5x4ymyt6jqrnpxso',
        code: "",
        username: "",
        vod_filter: "",
        start_filter: "",
        end_filter: "",
        user_filter: "",
        message_filter: "",
        vods: [],
        filteredVods: [],
        comments: [],
        filteredComments: [],
        loadedComments: [],
        loadedCommentIndex: 0,
        cancelCommentFetch: false,
        commentFetchInProgress: false,
        selectSize: window.innerHeight < 800 ? 0 : 20
    }),
    methods: {
        handleWindowResize() {
            if (this.timeout) 
                clearTimeout(this.timeout); 
            this.timeout = setTimeout(() => {
                if(this.isMobile())
                    this.selectSize = 0;
                else
                    this.selectSize = window.innerHeight < 800 ? 0 : 20;
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
        filterVods(event) {
            if (this.timeout) 
                clearTimeout(this.timeout); 
            this.timeout = setTimeout(() => {

                // needed for input change detection on mobile
                if (event.target.id === 'vod-filter')
                    this.vod_filter = event.target.value;
                else if (event.target.id === 'start-time')
                    this.start_time = event.target.value;
                else if (event.target.id === 'end-filter')
                    this.end_time = event.target.value;

                this.$refs.vodSelect[0].selected = true;
                this.filteredVods = this.vods.filter(this.compareVod);
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
                    this.user_filter = event.target.value;
                else if (event.target.id === 'message-filter')
                    this.message_filter = event.target.value;

                this.loadedCommentIndex = 0;
                this.loadedComments = [];
                this.filteredComments = this.comments.filter(this.compareComment);
                this.loadedComments = this.loadedComments.concat(this.filteredComments.slice(this.loadedCommentIndex, this.loadedCommentIndex + 1001));
                this.loadedCommentIndex = this.loadedComments.length;

            }, 200); 
        },
        onCommentScroll({ target: { scrollTop, clientHeight, scrollHeight }}) {
            if (this.timeout) 
                clearTimeout(this.timeout); 

            this.timeout = setTimeout(() => {
                if (scrollTop + clientHeight >= scrollHeight){
                    var startTotal = this.loadedComments.length;
                    this.loadedComments = this.loadedComments.concat(this.filteredComments.slice(this.loadedCommentIndex, this.loadedCommentIndex + 1001));
                    this.loadedCommentIndex += this.loadedComments.length - startTotal;
                }
            }, 200); 
        },
        compareComment(comment) {
            if (!comment.username.toLowerCase().includes(this.user_filter.toLowerCase()) && this.user_filter !== "")
                return false;
            if (!comment.message.toLowerCase().includes(this.message_filter.toLowerCase()) && this.message_filter !== "")
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
            var id = await this.getUserId();
            var cursor = "";
            this.vods = [];
            this.filteredVods = [];

            do {
                const headers = {
                    'Client-ID': this.client_id,
                    'Authorization': 'Bearer ' + this.code
                };
                const res = await axios.get(`https://api.twitch.tv/helix/videos?user_id=${id}&first=100&after=${cursor}`, { headers });
                var data = res.data.data.map(v => ({id: v.id, created_at: v.created_at, title: v.title }));
                this.vods.push(...data);
                this.filteredVods.push(...data.filter(this.compareVod));
                if(res.data.pagination.cursor)
                    cursor = res.data.pagination.cursor;
                else
                    break;
            } while (cursor)
        },
        async getComments(event) {

            if (this.commentFetchInProgress) {
                this.cancelCommentFetch = true;
                while (this.commentFetchInProgress)
                    await new Promise(r => setTimeout(r, 1000));
            }

            const headers = { 'Client-ID': this.client_id };
            const baseUrl = `https://api.twitch.tv/v5/videos/${event.target.value}/comments`;
            var cursor = '';
            this.comments = [];
            this.filteredComments = [];
            this.loadedComments = [];
            this.loadedCommentIndex = 0;
            this.commentFetchInProgress = true;

            do {
                var url = (cursor === null || cursor === '') ?
                    `${baseUrl}?content_offset_seconds=0` :
                    `${baseUrl}?cursor=${cursor}`;

                const res = await axios.get(url, { headers });
                var data = res.data.comments.map(c => ({
                    created_at: c.created_at, 
                    username: c.commenter.display_name, 
                    message: c.message.body, 
                    user_color: c.message.user_color, 
                    vod_link: `https://www.twitch.tv/videos/${event.target.value}?t=${Math.floor(c.content_offset_seconds/3600)}h${Math.floor(c.content_offset_seconds/60)}m${Math.floor(c.content_offset_seconds%60)}s` }));
                this.comments.push(...data);
                var filtered = data.filter(this.compareComment);
                this.filteredComments.push(...filtered);
                if (this.loadedComments.length < 1000)
                    this.loadedComments.push(...filtered);
                if (!res.data._next || this.comments.length > 10000)
                    break;
                cursor = res.data._next;
            } while (cursor && !this.cancelCommentFetch)

            this.loadedCommentIndex = this.loadedComments.length;
            this.commentFetchInProgress = false;
            this.cancelCommentFetch = false;
        }
    },
    created: function(){
        const searchParams = new URLSearchParams(window.location.search);
        const hashParams = new URLSearchParams(window.location.hash.substr(1));
        if (searchParams.get('code')) 
            this.code = urlParams.get('code');
        else if (hashParams.get('access_token'))
            this.code = hashParams.get('access_token');

        window.addEventListener("resize", this.handleWindowResize);
        this.handleWindowResize();
    },
    destroyed() {
        window.removeEventListener("resize", this.handleWindowResize);
    }
}

</script>

<template>

    <div class="flex flex-wrap h-full w-full text-white p-2">
        <div class="h-1/3 w-full xl:w-1/3 xl:h-full border-b-4 border-gray-600 pb-2 xl:pb-0 xl:pr-2 xl:border-b-0 xl:border-r-4">
            <div class="flex flex-col h-full w-full gap-2">
                <div class="flex flex-wrap gap-2 min-w-full">
                    <div class="flex gap-2 min-w-full max-h-full pb-2 border-b-5 border-gray-600">
                        <a v-bind:href="`https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${client_id}&redirect_uri=https://encrypted-thoughts.github.io/chat-history&scope=chat:read&force_verify=true`" :class="code ? '' : 'animate-pulse'" class="w-1/4 text-center bg-gray-900 border-2 border-gray-600 hover:bg-gray-700 font-bold py-2 px-1 shadow-lg rounded-md">
                            <span class="text-xs md:text-base xl:text-lg" v-show="!code">ALLOW ACCESS</span>
                            <span class="text-xs md:text-base xl:text-lg" v-show="code">ALLOWED <font-awesome-icon icon="check" class="text-green-600"/></span>
                        </a>
                        <input @input="evt => username=evt.target.value" v-model="username" type="text" class="form-input focus:outline-none focus:ring-0 focus:border-green-700 bg-gray-900 px-3 py-2 rounded-md w-2/4" placeholder="Enter a username..."/>
                        <button @click="getVods()" :disabled="!username || !code" class="bg-gray-900 border-2 border-gray-600 hover:bg-gray-700 font-bold py-2 px-1 shadow-lg rounded-md w-1/4 disabled:opacity-50">
                            <span class="text-xs md:text-base xl:text-lg">VODS <font-awesome-icon icon="search"/></span>
                        </button>
                    </div>
                    
                    <div class="flex gap-2 min-w-full">
                        <input @input="filterVods($event)" id="vod-filter" v-model="vod_filter" type="text" class="w-1/3 focus:outline-none focus:ring-0 focus:border-green-700 form-input bg-gray-900 px-3 py-2 rounded-md disabled:opacity-50" placeholder="Filter on VOD name..."/>
                        <input @input="filterVods($event)" id="start_time" v-model="start_filter" type="datetime-local" :class="start_filter ? '' : 'start-time'" class="w-1/3 flex-1 form-input focus:outline-none focus:ring-0 focus:border-green-700 bg-gray-900 px-3 py-2 rounded-md disabled:opacity-50" placeholder="Start time filter..."/>
                        <input @input="filterVods($event)" id="end_time" v-model="end_filter" type="datetime-local" :class="end_filter ? '' : 'end-time'" class="w-1/3 flex-1 form-input focus:outline-none focus:ring-0 focus:border-green-700 bg-gray-900 px-3 py-2 rounded-md disabled:opacity-50" placeholder="End time filter..."/>
                    </div>
                </div>
                <select ref="vodSelect" @change="getComments($event)" :disabled="vods.length === 0" :size="selectSize" :class="selectSize > 0 ? 'bg-none p-0' : ''" class="focus:outline-none focus:ring-0 focus:border-green-800 h-full w-full border-2 border-gray-600 bg-gray-900 rounded-md scrollbar-thin scrollbar-thumb-green-900 hover:scrollbar-thumb-green-800 scrollbar-track-gray-500 break-words whitespace-normal">
                    <option ref="defaultOption" value="" disabled hidden selected class="rounded-sm even:bg-gray-800 w-full p-1 pl-3">Select a vod...</option>
                    <option v-for="(vod, index) in filteredVods" :value="vod.id" class="rounded-sm even:bg-gray-800 w-full p-1 pl-3">
                        {{ formatDate(vod.created_at) }}: {{vod.title}}
                    </option>
                </select>
            </div>
        </div>
        <div class="h-2/3 w-full xl:w-2/3 xl:h-full pt-2 xl:pt-0 xl:pl-2">
            <div class="flex flex-col rounded-md h-full border-3 border-gray-600 bg-gray-900">
                <div class="flex w-full border-b-4 border-gray-600">
                    <input @input="filterComments($event)" id="user_filter" v-model="user_filter" type="text" class="w-1/2 form-input focus:outline-none focus:ring-0 focus:border-green-700 bg-gray-900" placeholder="Filter on username..."/>
                    <input @input="filterComments($event)" id="message_filter" v-model="message_filter" type="text" class="w-1/2 form-input focus:outline-none focus:ring-0 focus:border-green-700 bg-gray-900" placeholder="Filter on message..."/>
                </div>
                <div @scroll="onCommentScroll" class="h-full scrollbar-thin scrollbar-thumb-green-900 scrollbar-track-gray-500 scrollbar scrollbar-thumb-green-900 hover:scrollbar-thumb-green-800 scrollbar-track-gray-500">
                    <div class="w-full bg-gray-900 text-left">
                        <div class="w-full">
                            <div v-for="comment in loadedComments" class="flex even:bg-gray-800">
                                <div class="px-3 py-1 w-full self-center">
                                    <a class="text-gray-400 pr-1" :href="comment.vod_link" target="_blank" rel="noopener noreferrer">{{formatTime(comment.created_at)}}</a>
                                    <a :style="{ color: comment.user_color }" :href="`https://www.twitch.tv/${comment.username}`" target="_blank" rel="noopener noreferrer">{{comment.username}}</a>
                                    <span>: {{ comment.message }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <font-awesome-icon icon="spinner" pulse v-show="commentFetchInProgress" class="absolute bottom-5 right-7"/>
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
