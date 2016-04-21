/**
 * Created by taox on 16-3-2.
 */
var Vue = require('vue');
Vue.filter('trafficTrans', function (bytes) {
  var measures = ['B','KB','MB','GB','TB'],idx=0;
  if(typeof bytes !=='number'){
    bytes = Number(bytes) || 0;
  }
  while(bytes > 1024 && idx <5){
    bytes = bytes/1024;
    idx++;
  }
  return bytes.toFixed(2)+measures[idx];
});
Vue.filter('timeTrans', function (seconds){
  var measures = ['秒','分钟','小时'],idx=0,res='';
  if(typeof seconds !=='number'){
    seconds = Number(seconds) || 0;
  }
  seconds = Math.ceil(seconds);
  while(seconds > 59 && idx<2){
    res = (seconds%60).toFixed(0)+measures[idx]+res;
    idx=idx+1;
    seconds = seconds/60;
  }
  return seconds.toFixed(0)+measures[idx]+res;
});
Vue.filter('timeTransNumber', function (seconds){
  var ret,idx=0,res='';
  if(typeof seconds !=='number'){
    seconds = Number(seconds) || 0;
  }
  seconds = Math.ceil(seconds);
  while(seconds > 59 && idx<2){
    res = (seconds%60).toFixed(0)+':'+res;
    idx=idx+1;
    seconds = seconds/60;
  }
  ret=seconds.toFixed(0)+':'+res;
  return ret.substr(0,ret.length-1);
});
