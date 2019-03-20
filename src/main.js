import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

// by including this, we are able to globally reference the router-view component throughout the application
Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
