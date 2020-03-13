// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import financeaxios from './financeaxios';
import api from './api';
// import common from './common.js';
//import mock from './mock.js';
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(api);
Vue.use(financeaxios);
// Vue.use(common);
//Vue.use(mock);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

