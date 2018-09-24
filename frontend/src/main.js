import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps';
import VueResource from 'vue-resource';

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(VueGoogleMaps, {
  load: {
	key: 'AIzaSyBcI3sUUkBRkY9ysAsV6Lgh1BpfdIZHxqY',
	libraries: 'places,drawing,visualization'
  }
});

// Set REST api endpoint
var protocol = document.location.protocol;
var host = document.location.hostname;
var port = 9000;
Vue.http.options.root = `${protocol}//${host}:${port}`;

new Vue({
  render: h => h(App)
}).$mount('#app')
