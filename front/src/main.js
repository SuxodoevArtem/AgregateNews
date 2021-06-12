import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/global.scss';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

