<template>
  <div>
    <button @click="performAction">Click me</button>
    <label>Result: {{ result }}</label>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      result: 'hello world'
    }
  },
  methods: {
    performAction() {
      const url = import.meta.env.VITE_BASE_URL_FUNCTION + 'helloWorld'
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log('Response from server:', data)
          this.result = data.message || 'Action performed successfully!'
        })
        .catch(error => {
          console.error('Error:', error)
          this.result = 'Error performing action'
        })
    }
  }
}
</script>