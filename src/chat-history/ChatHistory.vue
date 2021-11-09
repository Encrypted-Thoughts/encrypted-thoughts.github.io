<script>
import axios from 'axios';
import moment from 'moment';

const client_id = 'icyqwwpy744ugu5x4ymyt6jqrnpxso';

export default {
    name: "ChatHistory",
    data: ()=>( {
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
        filteredComments: []
    }),
    methods: {
        getToken() {
            window.location.href = `https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${client_id}&redirect_uri=https://encrypted-thoughts.github.io/chat-history&scope=chat:read&force_verify=true`;
        },
        formatDate(value) {
            if (value) {
                return moment(String(value)).format('YYYY/MM/DD hh:mm:ss A')
            }
        },
        filterVods() {
            if (this.timeout) 
                clearTimeout(this.timeout); 

            this.timeout = setTimeout(() => {
                
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
        filterComments() {
            if (this.timeout) 
                clearTimeout(this.timeout); 

            this.timeout = setTimeout(() => {
                
                this.filteredComments = this.comments.filter(this.compareComment);

            }, 200); 
        },
        compareComment(comment) {
            if (!comment.commenter.display_name.toLowerCase().includes(this.user_filter.toLowerCase()) && this.user_filter !== "")
                return false;
            if (!comment.message.body.toLowerCase().includes(this.message_filter.toLowerCase()) && this.message_filter !== "")
                return false;
            
            return true;
        },
        async getUserId() {

            const headers = {
                'Client-ID': client_id,
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
                    'Client-ID': client_id,
                    'Authorization': 'Bearer ' + this.code
                };
                const res = await axios.get(`https://api.twitch.tv/helix/videos?user_id=${id}&first=100&after=${cursor}`, { headers });
                this.vods.push(...res.data.data);
                this.filteredVods.push(...res.data.data.filter(this.compareVod));
                if(res.data.pagination.cursor)
                    cursor = res.data.pagination.cursor;
                else
                    break;
            } while (cursor)

            this.filterVods();
        },
        async getComments(event) {
            const headers = { 'Client-ID': client_id };
            const baseUrl = `https://api.twitch.tv/v5/videos/${event.target.value}/comments`;
            var cursor = '';
            this.comments = [];
            this.filteredComments = [];

            do {
                var url = (cursor === null || cursor === '') ?
                    `${baseUrl}?content_offset_seconds=0` :
                    `${baseUrl}?cursor=${cursor}`;

                const res = await axios.get(url, { headers });
                this.comments.push(...res.data.comments);
                this.filteredComments.push(...res.data.comments.filter(this.compareComment));
                if(res.data._next)
                    cursor = res.data._next;
                else
                    break;
            } while (cursor)

            this.filterComments();
        }
    },
    created: function(){
        const searchParams = new URLSearchParams(window.location.search);
        const hashParams = new URLSearchParams(window.location.hash.substr(1));
        if (searchParams.get('code')) 
            this.code = urlParams.get('code');
        else if (hashParams.get('access_token'))
            this.code = hashParams.get('access_token');
    }
}

</script>

<template>

    <div class="flex flex-wrap h-full w-full text-white p-2">
        <div class="h-1/3 w-full xl:w-1/3 xl:h-full border-b-4 border-gray-600 pb-2 xl:pb-0 xl:pr-2 xl:border-b-0 xl:border-r-4">
            <div class="flex flex-col h-full min-w-full gap-2">
                <div class="flex flex-wrap gap-2 max-w-full">
                    <div class="flex gap-2 min-w-full max-h-full">
                        <button @click="getToken()" class="bg-gray-900 border-2 border-gray-600 w-1/3 hover:bg-gray-700 font-bold py-2 px-4 shadow-lg rounded-md">
                            GET TOKEN
                        </button>
                        <input id="code" v-model="code" type="text" class="form-input bg-gray-900 px-4 py-2 rounded-md w-2/3" placeholder="Enter Access Token"/>
                    </div>
                    <div class="flex gap-2 min-w-full">
                        <input v-model="username" type="text" class="form-input bg-gray-900 px-4 py-2 rounded-md w-2/3" placeholder="Enter Username"/>
                        <button @click="getVods()" :disabled="!this.username || !this.code" class="bg-gray-900 border-2 border-gray-600 hover:bg-gray-700 font-bold py-2 px-4 shadow-lg rounded-md w-1/3 disabled:opacity-50 disabled:hover">
                            POPULATE VOD LIST
                        </button>
                    </div>
                    <input @input="filterVods()" id="vod-filter" v-model="vod_filter" type="text" class="form-input bg-gray-900 px-4 py-2 rounded-md min-w-full disabled:opacity-50" placeholder="Filter on VOD name..."/>
                    <div class="flex gap-2 min-w-full">
                        <input @input="filterVods()" id="start_time" v-model="start_filter" type="datetime-local" class="flex-1 form-input bg-gray-900 px-4 py-2 rounded-md disabled:opacity-50" placeholder="Start time filter..."/>
                        <input @input="filterVods()" id="end_time" v-model="end_filter" type="datetime-local" class="flex-1 form-input bg-gray-900 px-4 py-2 rounded-md disabled:opacity-50" placeholder="End time filter..."/>
                    </div>
                </div>
                <select @change="getComments($event)" size="20" class="h-full w-full p-2 border-2 border-gray-600 bg-gray-900 rounded-md overflow-y-auto bg-none">
                    <option v-for="(vod, index) in filteredVods" v-bind:value="vod.id" class="rounded-sm even:bg-gray-800">{{ formatDate(vod.created_at) }}: {{vod.title}}</option>
                </select>
            </div>
        </div>
        <div class="h-2/3 w-full xl:w-2/3 xl:h-full pt-2 xl:pt-0 xl:pl-2">
            <div class="overflow-y-auto overflow-x-auto h-full rounded-md border-3 border-gray-600 bg-gray-900">
                <table class="table-auto bg-gray-900 text-left w-full">
                    <thead class="border-b-4 border-gray-600">
                        <tr>
                        <th class="p-2 w-52 min-w-52">TIMESTAMP</th>
                        <th class="p-2 w-60 border-l-3 border-gray-600">
                            <input @input="filterComments()" id="user_filter" v-model="user_filter" type="text" class="form-input bg-gray-900 rounded-md w-full placeholder-white" placeholder="USERNAME"/>
                        </th>
                        <th class="p-2 border-l-3 border-gray-600">
                            <input @input="filterComments()" id="message_filter" v-model="message_filter" type="text" class="form-input bg-gray-900 rounded-md w-full placeholder-white" placeholder="MESSAGE"/>
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="comment in filteredComments" class="even:bg-gray-800">
                            <td class="pl-2 pr-2">{{ formatDate(comment.created_at ) }}</td>
                            <td class="pl-2 pr-2">{{ comment.commenter.display_name }}</td>
                            <td class="pl-2 pr-2">{{ comment.message.body }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</template>

<style scoped>
::-webkit-calendar-picker-indicator {
    filter: invert(1);
}

input[type="datetime-local"]#start_time:before{
    content: 'Start Time: ';
    text-align: left;
    width:80px;
}

input[type="datetime-local"]#end_time:before {
    content: 'End Time: ';
    text-align: left;
    width:75px;
}


</style>
