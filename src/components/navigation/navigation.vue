<template>
  <div class="navigation">
    <div class="container">
      <div class="nav">
        <ul>
          <li><a  v-link="{name:'film'}">作品池</a> </li>
          <li><a>创作者</a></li>
          <li>素材池</li>
          <li>剧本</li>
          <li>学院</li>
        </ul>
      </div>
      <div class="upload-btn" v-on:click.stop="isOpUp=true">
        <i class="cloud sp i129"></i>
        <div class="upload animated" v-show="isOpUp" transition="flipInX">
          <span>上传素材</span>
          <div class="btn-red"><a  v-link="{name:'film'}">上传作品</a></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  module.exports = {
    data:function(){
      return {
        isOpUp:false
      }
    },
    events:{
      close_modal:function(){
        this.isOpUp = false;
        return true;
      }
    }
  }
</script>
