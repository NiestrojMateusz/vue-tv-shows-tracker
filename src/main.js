// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './routes';
import sanitizeHTML from 'sanitize-html';

Vue.prototype.$sanitize = sanitizeHTML

Vue.config.productionTip = false;

/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
