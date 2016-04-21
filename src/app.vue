<template>
  <!-- main view -->
  <my-mask></my-mask>
  <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    <div>

    </div>
  </router-view>
</template>
<script>
  var mask = require('./components/mask/mask.vue');

  module.exports = {
    replace:false,
    components:{
      myMask:mask
    },
    events:{
      'app-mask-show':function(msg) {
        this.$broadcast('mask_show',msg);
      }
    }
  }
</script>