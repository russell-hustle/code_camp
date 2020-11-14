import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import { spotify, lyrics } from './axios';
import store from './store';

Vue.prototype.$spotify = spotify;
Vue.prototype.$lyrics = lyrics;

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app');