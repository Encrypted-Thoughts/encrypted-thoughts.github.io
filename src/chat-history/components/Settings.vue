<script>
export default {
    name: "Settings",
    data: ()=>( {
        code: "",
        username: "",
        vod_filter: "",
        start_filter: "",
        end_filter: "",
        list: [
            {id:1 ,name:'Chicago Bulls',desc:'芝加哥公牛'},
            {id:2 ,name:'Cleveland Cavaliers',desc:'克里夫兰骑士'},
        ]
    }),
    methods: {
        copyToClipboard() {
            navigator.clipboard.writeText(this.code);
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
    <div class="flex flex-col h-full min-w-full p-2 gap-2">
        <div class="flex flex-wrap gap-2 max-w-full">
            <div class="flex gap-2 min-w-full max-h-full">
                <button @click="" class="bg-gray-900 border-2 border-gray-600 w-1/3 hover:bg-gray-700 font-bold py-2 px-4 shadow-lg rounded-md">
                    GET TOKEN
                </button>
                <input id="code" v-model="code" type="text" class="form-input bg-gray-900 px-4 py-2 rounded-md w-2/3" placeholder="Enter Access Token"/>
            </div>
            <div class="flex gap-2 min-w-full">
                <input v-model="username" type="text" class="form-input bg-gray-900 px-4 py-2 rounded-md w-2/3" placeholder="Enter Username"/>
                <button @click="" class="bg-gray-900 border-2 border-gray-600 hover:bg-gray-700 font-bold py-2 px-4 shadow-lg rounded-md w-1/3">
                    POPULATE VOD LIST
                </button>
            </div>
            <input id="vod-filter" v-model="vod_filter" type="text" class="form-input bg-gray-900 px-4 py-2 rounded-md min-w-full" placeholder="Filter on VOD name..."/>
            <div class="flex gap-2 min-w-full">
                <input id="start-time" v-model="start_filter" type="datetime-local" class="flex-1 form-input bg-gray-900 px-4 py-2 rounded-md" placeholder="Start time filter..."/>
                <input id="end-time" v-model="end_filter" type="datetime-local" class="flex-1 form-input bg-gray-900 px-4 py-2 rounded-md" placeholder="End time filter..."/>
            </div>
        </div>
        <select size="2" class="h-full w-full p-2 border-2 border-gray-600 bg-gray-900 rounded-md overflow-y-auto bg-none">
            <option class="rounded-sm">Blah</option>
            <option class="rounded-sm">Blarg</option>
        </select>
    </div>

</template>

<style scoped>
::-webkit-calendar-picker-indicator {
    filter: invert(1);
}

.selected {
    
}
</style>
