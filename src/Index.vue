<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <div class="mx-auto bg-gray-800">
    <div class="grid h-screen justify-items-center place-content-center text-white">
      <img alt="Vue logo" class="justify-self-center" src="./shared/assets/logo.png" />

      <h1>{{ msg }}</h1>

      <p>
        Recommended IDE setup:
        <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
        +
        <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
      </p>

      <p>
        <a href="https://vitejs.dev/guide/features.html" target="_blank">
          Vite Documentation
        </a>
        |
        <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
      </p>

      <button type="button" class="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded shadow-lg" @click="count++">count is: {{ count }}</button>

    </div>
  </div>  

</template>

<style scoped>
a {
  color: #42b983;
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
}
</style>
