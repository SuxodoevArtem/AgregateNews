import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/global.scss';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

