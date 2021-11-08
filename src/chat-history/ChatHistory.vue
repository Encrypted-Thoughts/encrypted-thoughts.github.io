<script>
import Settings from "./components/Settings.vue"
import Logs from "./components/Logs.vue"

export default {
    name: "ChatHistory",
    components: {
        Settings,
        Logs
    },
    data: ()=>( {
        logs: ""
    }),
    methods: {

    },
    created: function(){

    }
}

</script>

<template>

    <div class="flex flex-wrap h-full w-full text-white">
        <div class="h-1/3 w-full xl:w-1/3 xl:h-full border-b-5 border-gray-600 xl:border-b-0 xl:border-r-5">
            <Settings/>
        </div>
    </div>

</template>

<style scoped>
</style>
