import './firebase'
import Vue from 'vue'
import App from './App.vue'
import VueFire from 'vuefire'
import router from './router'
import store from './store'
import '@/assets/css/bootstrap.min.css'

Vue.config.productionTip = false
Vue.use(VueFire)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
