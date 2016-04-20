<template>
  <div class="main">
    <input type="text" v-model="text" />
    <div class="hello">Hello {{ text }}!</div>
  </div>
</template>

<script>
    module.exports = {
        replace: false,
        data:function(){
            return {
                text: 'vue'
            }
        }
    }
</script>
