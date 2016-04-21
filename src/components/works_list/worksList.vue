<template>
  <div class="items-list">
    <div class="item" v-for="video in videoList">
      <div class="img-wrap"  v-on:mouseenter="play($event,$index)" v-on:mouseleave="destroy($event,$index)" v-on:click="goPlayer($index)">
        <img src="./A3.jpg" class="cover-img">
        <div class="labels"><i class="sp i133"></i><i class="sp i134"></i></div>
        <div class="video-container">
        </div>
      </div>
      <div class="item-content">
        <a href="play.html" class="title">{{video.name}}</a>
        <span class="time">{{duration | timeTransNumber}}</span>
        <div class="labels">商业广告|汽车|TVC|模特|源文件|高清|LogC|测试样片</div>
        <div class="icons">
          <div class="icon"><i class="inline-block sp i27"></i><span>{{video.playCount}}</span></div>
          <div class="icon"><i class="inline-block sp i28"></i><span>{{video.likeCount}}</span></div>
          <div class="icon"><i class="inline-block sp i29"></i><span>{{video.commentCount}}</span></div>
          <div class="icon"><i class="inline-block sp i30"></i><span>115</span></div>
        </div>
      </div>
      <div class="item-user">
        <div class="avatar"><img v-bind:src="'http://www.gaiamount.com/system/user/avatar/'+video.avatar" width="24" height="24" onerror="this.src='/static/img/A3.jpg'"></div>
        <div class="username">{{video.nickName}}</div>
      </div>
    </div>
  </div>
</template>
<script>
  var filter = require('../../filters/trans.js');
  module.exports = {
    replace:true,
    props:{
      videoList:{
        type:Array,
        default:function(){
          return [{},{},{},{},{},{},{},{}]
        }
      }
    },
    data:function(){
      return {
        videoComponent:'',
        videoJs:'',
        videoInstances:[],
        initVideo:false,
        isLoaded:false
      }
    },
    components:{
    },
    created:function(){
    },
    ready:function(){
      var self = this;
        require.ensure(["../video-js/video.vue"], function (require) {
          self.videoJs = require("../video-js/video.vue");
          self.videoComponent = Vue.component('videoJs', self.videoJs);
        });
    },
    attached:function(){
    },
    methods:{
      /**
       * 创建video实例;将video模块插入需要播放位置;调用播放视频
       */
      play:function(e,idx){
        if(!this.videoList[idx].video){
          $(e.target).find('.video-container').append(this.videoJs.template);
//          e.target.innerHTML = this.videoJs.template;
          var videoInstance = new this.videoComponent();
          videoInstance.initVideo({
            id:'vid1',
            autoplay:true,
            controlBar: {
              volumeMenuButton: {
                inline: false,
                vertical: true
              },
              PlayResolutions:{
                idx:1,   //0-n
                videos:[
                  {
                    name:'720p',
                    src:'http://7xqjp2.com1.z0.glb.clouddn.com/V2gXjbEhXSwOCrTMZXKwYd_5-X4%3D%2FlqDkuRYFVokC045xBdCN2UyAqY3_',
                    type: 'application/vnd.apple.mpegurl'
                  },
                  {
                    name:'MP4',
                    src:'http://7xqjp2.com1.z0.glb.clouddn.com/Michael%20Jackson%20-%20Hollywood%20Tonight.mp4',
                    type: 'video/mp4'
                  },
                  {
                    name:'1080p',
                    src:'http://7xqjp2.com1.z0.glb.clouddn.com/V2gXjbEhXSwOCrTMZXKwYd_5-X4%3D%2FlqDkuRYFVokC045xBdCN2UyAqY3_',
                    type: 'application/vnd.apple.mpegurl'
                  },
                  {
                    name:'2K',
                    src:'http://7xqjp2.com1.z0.glb.clouddn.com/V2gXjbEhXSwOCrTMZXKwYd_5-X4%3D%2FlqDkuRYFVokC045xBdCN2UyAqY3_',
                    type:'application/vnd.apple.mpegurl'
                  }
                ]
              },
              PlayerRatio:{
                idx:1,
                ratios:[
                  {
                    name:'16:9',
                    width:'860',
                    height:'483'
                  },
                  {
                    name:'4:3',
                    width:'860',
                    height:'645'
                  }
                ]
              },
              LogoText:{
                click:function(){
                  console.log('this is logo');
                }
              }
            }
          });
          this.videoList[idx].video = videoInstance;
        }
      },
      /**
       * 删除video实例
       */
      destroy:function(e,idx){
        console.log('destory....');
        if(this.videoList[idx].video){
          this.videoList[idx].video.player.dispose();
          this.videoList[idx].video = null;
        }
      },
      /**
       * 跳转播放页;
       */
      goPlayer:function(index){
        this.videoList[index].video.player.dispose();                //删除当前video实例;
        this.videoList[index].video = null;
        this.$router.go({name:'player',params:{videoId:index}})
      }
    },
    events:{
      /**
       * 监听事件,获得视频播放列表
       * @param array 显示视频播放列表
       */
      'works-list':function(array){

      }
    }
  }
</script>
