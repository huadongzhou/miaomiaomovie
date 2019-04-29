import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import axios from 'axios'

Vue.prototype.axios = axios
Vue.config.productionTip = false

Vue.filter('setWH', (url, WH) => {
  return url.replace(/w\.h/, WH)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
