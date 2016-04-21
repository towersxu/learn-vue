<template>
  <div class="main">
    <my-header></my-header>
    <my-mask></my-mask>
  </div>
</template>

<script>
  var header = require('./components/header/header.vue');
  var mask = require('./components/mask/mask.vue');
  module.exports = {
    replace: false,
    data: function () {
      return {
        text: 'vue'
      }
    },
    components:{
      myHeader:header,
      myMask:mask
    },
    events:{
      'app-mask-show':function(msg) {
        this.$broadcast('mask_show',msg);
      }
    }
  }
</script>
