<template>
  <div class="pagination">
    <span class="page-tool prev" v-show="pagination.index > 1" v-on:click="goPage(--pagination.index)">上页</span>
    <span v-show="pageItems[0] > 1">
      <span class="page end">1</span>
      <span class="dot"></span>
    </span>
    <span v-for="p in pageItems"><span class="page" v-bind:class="{'select':p === pagination.index}" v-on:click="goPage(p)">{{p}}</span></span>
    <span v-show="pageItems[pageItems.length-1] !== pages">
         <span class="dot"></span>
    <span class="page end">{{pages}}</span>
    </span>
    <span class="page-tool next" v-show="pagination.index < pages" v-on:click="goPage(++pagination.index)">下页</span>
  </div>
</template>
<script>
  module.exports = {
    props:{
      pagination:{
        type:Object,
        default:function(){
          return {
            index: 4,
            size: 32,
            total: 100,
            number:6
          }
        }
      }
    },
    computed:{
      /**
       *
       * @return {number} 总页数
       */
      pages:function(){
        return Math.ceil(this.pagination.total/this.pagination.size);
      },
      /**
       * 显示页码
       * @return {Array}
       */
      pageItems:function(){
        var arr = [],
          length = this.pagination.number || 6,                                 //显示页码个数
          totalPage = Math.ceil(this.pagination.total/this.pagination.size),    //选中页
          idx = this.pagination.index,                                          //当前页
          begin= 1;                                                             //显示页码起始页

        //如果总页数不到设定的页数,则只显示总页数的页码.
        if(totalPage < length){
          length = totalPage;
        }
        //在当前页大于4,并且总页数大于显示页码个数的时候,将起始页变成当前页的前3页
        if(idx > 4 && totalPage > length){
          begin=this.pagination.index-3;
        }
        //当前页大于最大页-3时;起始页变成最大页减去页码个数;
        if(totalPage>length && idx > totalPage-3){
          begin = totalPage-length+1;
        }
        //设置显示的页码.
        for(var i=0;i<length;i++){
          arr.push(begin);
          begin++;
        }
        return arr;
      }
    },
    methods:{
      goPage:function(page){
        this.pagination.index = page;
        this.$dispatch('page-change',page);
      }
    }
  }
</script>
