var Vue =require('vue');
var app = require('./app.vue');
var VueRouter =require('vue-router');

require('./styles.css');

Vue.config.debug = process.env.NODE_ENV !== 'production'

Vue.use(VueRouter)

var router = new VueRouter()
var App = Vue.extend(app)

router.start(App, 'body');
