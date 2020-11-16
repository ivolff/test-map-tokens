import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import movable from "v-movable"

Vue.config.productionTip = false
Vue.use(movable)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
