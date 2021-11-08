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

    <div class="h-full bg-gray-900">
        <div id="border" class="h-full border-4 border-gray-600 rounded-md">
            <div class="grid h-full justify-items-center place-content-center">
                <h1 class="text-2xl text-white">Authorization Code / Access Token</h1>
                <div class="flex flex-row">
                    <input type="text" v-model="code" ref="code" class="w-96 shadow-lg text-center font-bold rounded-l-md outline-none" @click="this.$refs.code.select()" readonly>
                    <button @click="copyToClipboard()" class="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 shadow-lg rounded-r-md">
                        <font-awesome-icon icon="copy"/>
                    </button>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
#border {
    box-shadow: 1px 1px 0.5em black inset;
}
</style>
