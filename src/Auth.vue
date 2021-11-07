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

    <div class="mx-auto bg-gray-800">
        <div class="grid h-screen justify-items-center place-content-center">
            <h1 class="text-2xl text-white">Authorization Code / Access Token</h1>
            <div class="flex flex-row">
                <input type="text" v-model="code" ref="code" class="w-96 shadow-lg text-center font-bold rounded-l-md outline-none" @click="this.$refs.code.select()" readonly>
                <button @click="copyToClipboard()" class="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 shadow-lg rounded-r-md">
                    <font-awesome-icon icon="copy"/>
                </button>
            </div>
        </div>
    </div>

</template>

<style scoped>
    #app {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    width: 100%;
    }
</style>
