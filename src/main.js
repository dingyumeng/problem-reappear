import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

import 'amfe-flexible';
import 'normalize.css/normalize.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
