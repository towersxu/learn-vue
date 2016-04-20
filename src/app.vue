<template>
  <div class="main">
    <input type="text" v-model="text" />
    <div class="hello">Hello {{ text }}!</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    replace: false,
  	data() {
      return {
        text: 'vue'
      }
    }
  }
iife();
</script>
