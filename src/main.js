import Vue from 'vue'
import App from './App'
import router from './routers'
import store from './stores'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
