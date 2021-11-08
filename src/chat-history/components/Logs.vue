<script>

export default {
    name: "Logs",
    data: ()=>( {
        code: ""
    }),
    methods: {

    },
    created: function(){

    }
}

</script>

<template>

    <table class="table-auto bg-gray-500 h-full w-full">
        <thead>
            <tr>
            <th>Timestamp</th>
            <th>Username</th>
            <th>Message</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Intro to CSS</td>
            <td>Adam</td>
            <td>858</td>
            </tr>
            <tr class="bg-green-200">
            <td></td>
            <td>Adam</td>
            <td>112</td>
            </tr>
            <tr>
            <td>Intro to JavaScript</td>
            <td>Chris</td>
            <td>1,280</td>
            </tr>
        </tbody>
    </table>

</template>

<style scoped>
</style>
