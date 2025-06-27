<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold text-center mb-8">{{ msg }}</h1>

    <div class="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <div class="flex flex-col items-center space-y-4">
        <button 
          @click="count++" 
          class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
        >
          Count is {{ count }}
        </button>
        <p class="text-gray-600 text-center">
          Edit <code class="bg-gray-100 px-2 py-1 rounded">components/HelloWorld.vue</code> to test HMR
        </p>
      </div>
    </div>

    <div class="mt-8 text-center space-y-4">
      <p class="text-gray-600">
        Check out
        <a 
          href="https://vuejs.org/guide/quick-start.html#local" 
          target="_blank"
          class="text-blue-500 hover:text-blue-600 underline"
        >
          create-vue
        </a>, the official Vue + Vite starter
      </p>
      <p class="text-gray-600">
        Learn more about IDE Support for Vue in the
        <a
          href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
          target="_blank"
          class="text-blue-500 hover:text-blue-600 underline"
        >
          Vue Docs Scaling up Guide
        </a>
      </p>
    </div>
  </div>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
