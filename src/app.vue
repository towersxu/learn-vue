<template>
  <div class="main">
    <input type="text" v-model="text"/>

    <div class="hello">Hello {{ text }}!</div>
    <div class="inline-block sp i33"></div>
  </div>
</template>

<script>
  module.exports = {
    replace: false,
    data: function () {
      return {
        text: 'vue'
      }
    }
  }
</script>
