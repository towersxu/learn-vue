<template>
  <div class="main">
    <my-header></my-header>
  </div>
</template>

<script>
  var header = require('./components/header/header.vue');
  module.exports = {
    replace: false,
    data: function () {
      return {
        text: 'vue'
      }
    },
    components:{
      myHeader:header
    }
  }
</script>
