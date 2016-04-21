<template>
  <div class="films">
    <div class="container2">
      <h2>作品池></h2>
      <div class="filter">
        <div class="sel filter1" v-on:click="Tab1.show=true">
          <span>{{Tab1.text}}</span>
          <div class="selects animated" v-show="Tab1.show" transition="flipInX">
            <div class="option" v-on:click.stop="search('Tab1',0,'所有作品')">所有作品</div>
            <div class="option" v-on:click.stop="search('Tab1',1,'测试&样片')">测试&样片</div>
            <div class="option" v-on:click.stop="search('Tab1',2,'剪辑&调色')">剪辑&调色</div>
            <div class="option" v-on:click.stop="search('Tab1',3,'风景&旅行')">风景&旅行</div>
            <div class="option" v-on:click.stop="search('Tab1',4,'短片')">短片</div>
            <div class="option" v-on:click.stop="search('Tab1',5,'记录')">记录</div>
            <div class="option" v-on:click.stop="search('Tab1',6,'商业&广告')">商业&广告</div>
            <div class="option" v-on:click.stop="search('Tab1',7,'MV')">MV</div>
          </div>
        </div>
        <div class="sel filter2" v-on:click="Tab2.show=true">
          <span>{{Tab2.text}}</span>
          <div class="selects selects2 animated" v-show="Tab2.show" transition="flipInX">
            <div class="option" v-on:click.stop="search('Tab2',0,'全部')">全部</div>
            <div class="option" v-on:click.stop="search('Tab2',1,'盖亚推荐')">盖亚推荐</div>
            <div class="option" v-on:click.stop="search('Tab2',2,'4K')">4K</div>
            <div class="option" v-on:click.stop="search('Tab2',3,'可下载')">可下载</div>
            <div class="option" v-on:click.stop="search('Tab2',4,'免费下载')">免费下载</div>
            <div class="option" v-on:click.stop="search('Tab2',5,'付费下载')">付费下载</div>
          </div>
        </div>
        <div class="sel filter3" v-on:click="Tab3.show=true">
          <span>{{Tab3.text}}</span>
          <div class="selects selects2 animated" v-show="Tab3.show" transition="flipInX">
            <div class="option" v-on:click.stop="search('Tab3',1,'最新发布')">最新发布</div>
            <div class="option" v-on:click.stop="search('Tab3',2,'最多播放')">最多播放</div>
            <div class="option" v-on:click.stop="search('Tab3',3,'最多收藏')">最多收藏</div>
            <div class="option" v-on:click.stop="search('Tab3',4,'最多评论')">最多评论</div>
            <div class="option" v-on:click.stop="search('Tab3',5,'最多下载')">最多下载</div>
          </div>
        </div>
        <div class="sel search">
          <input type="text" class="search-box" v-model="keyWords" placeholder="搜索“深圳”" v-on:keyup.enter="searchVideo()">
          <i class="inline-block sp i96" v-on:click="searchVideo()"></i>
        </div>
        <div class="reset" v-on:click="reset()">
          <!--<i class="inline-block sp i68"></i>-->
        </div>
      </div>
      <div class="img-wraps">
        <div class="works-list-wrap">
          <works-list :video-list="reVideos"></works-list>
        </div>
        <pagination :pagination="pa"></pagination>
        <div class="adv">
          <img src="./A7.jpg" class="radius-img">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  var worksList = require('../../../components/works_list/worksList.vue');
  var pagination = require('../../../components/pagination/pagination.vue');
  module.exports = {
    data:function(){
      return {
        Tab1:{
          show:false,
          val:0,
          text:'所有作品'
        },
        Tab2:{
          show:false,
          val:0,
          text:'全部'
        },
        Tab3:{
          show:false,
          val:0,
          text:'默认'
        },
        keyWords:'',
        reVideos:[{},{},{},{},{},{},{},{}],
        pa:{},
        pi:1,
        ps:20
      }
    },
    created:function(){
      this.searchVideo();
    },
    components:{
      worksList:worksList,
      pagination:pagination
    },
    methods:{
      searchVideo:function(){
        var data = {
          wtype:this.Tab1.val,
          ptype:this.Tab2.val,
          stype:this.Tab3.val,
          key:this.keyWords,
          pi:this.pi,
          ps:this.ps
        };
        this.$http({
          url:'/web/works/search',
          data:data,
          method:'POST'
        }).then(function(res){
          if(res.data && res.data.b===1){
            this.reVideos =res.data.a;
            this.pa ={
              index: res.data.o.pageIndex,
              size:  res.data.o.pageSize,
              total: res.data.o.total,
              number:6
            };
          }
        });
      },
      search:function(tab,value,text){
        this[tab]={
          show:false,
          val:value,
          text:text
        };
        this.searchVideo();
      },
      reset:function(){
        this.pi=1;
        this.Tab1={
          show:false,
            val:0,
            text:'所有作品'
        };
        this.Tab2={
          show:false,
            val:0,
            text:'全部'
        };
        this.Tab3={
          show:false,
            val:0,
            text:'默认'
        };
        this.searchVideo();
      }
    },
    events:{
      'page-change':function(page){
        this.pi = page;
        this.searchVideo();
      }
    }
  }
</script>
