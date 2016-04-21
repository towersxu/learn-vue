<template>
  <div class="main">
    <my-header></my-header>
    <my-nav></my-nav>

    <banner></banner>
  </div>
</template>

<script>
  var header = require('../../components/header/header.vue');
  var nav = require('../../components/navigation/navigation.vue');
  var banner = require('./banner/banner.vue');
  module.exports = {
    replace: false,
    data: function () {
      return {
        text: 'vue'
      }
    },
    methods:{
      triggerClose:function(){
        this.$broadcast('close_modal');
      }
    },
    components:{
      myHeader:header,
      myNav:nav,
      banner:banner
    }
  }
</script>
