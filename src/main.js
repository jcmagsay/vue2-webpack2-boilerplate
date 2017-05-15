import Vue from 'vue';
import router from 'router';
import navbar from 'components/nav';
import App from 'layouts/app';

const app = new Vue({
  router,
  ...App,
  'components': {
    navbar
  }
});
app.$mount('#app');
