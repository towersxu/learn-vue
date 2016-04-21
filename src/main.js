var Vue =require('vue');
var app = require('./app.vue');
var VueRouter =require('vue-router');
var home =require('./views/home/home.vue');

require('./static/less/animate.less');
require('./static/less/style.less');
require('./static/less/home.less');

Vue.config.debug = process.env.NODE_ENV !== 'production';

Vue.use(VueRouter);

Vue.transition('fade',{
  enterClass:'fadeInDown',
  leaveClass:'fadeOutDown'
});
Vue.transition('flipInX',{
  enterClass:'flipInX',
  leaveClass:'flipOutX'
});
var router = new VueRouter();
var App = Vue.extend(app);
router.map({
  '/':{
    name:'home',
    component:home
  },
  '/film':{
    name:'film',
    component:function(resolve){
      require.ensure(['./views/films/films.vue'], function(){
        resolve(require("./views/films/films.vue"));
      });
    }
  }
});

router.beforeEach(function () {
  window.scrollTo(0, 0)
});

router.redirect({
  '*': '/'
});
router.start(App, 'body');
