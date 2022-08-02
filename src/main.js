import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import http from 'axios'
import '../api/mock.js'
import VueParticles from 'vue-particles'

Vue.config.productionTip = false
Vue.prototype.$http = http


Vue.use(ElementUI);
Vue.use(VueParticles)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
