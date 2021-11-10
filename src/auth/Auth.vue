<script>

export default {
    name: "Auth",
    data: ()=>( {
        code: "No Code/Token Detected"
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

    <div class="flex flex-col h-full w-full justify-center items-center text-center">
        <h1 class="text-2xl text-white">Authorization Code / Access Token</h1>
        <div class="flex w-full max-w-lg m-2">
            <input type="text" v-model="code" ref="code" class="flex-1 shadow-lg text-center font-bold rounded-l-md outline-none ml-2" @click="this.$refs.code.select()" readonly>
            <button @click="copyToClipboard()" class="flex-none bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 shadow-lg rounded-r-md mr-2">
                <font-awesome-icon icon="copy"/>
            </button>
        </div>
    </div>

</template>

<style scoped>
</style>
