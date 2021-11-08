<script>
import Prism from 'prismjs'
import 'prismjs/plugins/autolinker/prism-autolinker.js'
import 'prismjs/themes/prism-twilight.css'
import 'prismjs/components/prism-json'

export default {
  mounted() {
    Prism.highlightAll()
  }
}


</script>

<template>
    <pre id="code-block" class="language-json grid justify-items-center place-content-center w-full h-full">
        <code>{
    "name": "Encrypted Thoughts",
    "aliases": ["Encrypted", "ET"],
    "status": "Sleep deprived and somewhere between obsessed and apathetic.",
    "location": "nunya byznis",
    "skills": {
        "major": ["C#", "SQL", "Javascript"],
        "minor": ["Python", "Java"]
    },
    "likes": ["twitch", "chatbots", "audio", "d&d"],
    "dislikes": [
        "sunlight", 
        "long walks on the beach", 
        "people that don't clear excess time off the microwave"
    ],
    "links": ["https://www.twitch.tv/encryptedthoughts"]
}</code>
    </pre>
</template>

<style scoped>
#code-block {
    margin: 0px;
    background-color: rgba(23,23,23, 1);
    border: 0px;
    border-radius: 0px;
}
</style>
