import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false
import VueSlideBar from 'vue-slide-bar'
import '../node_modules/timeline-vuejs/dist/timeline-vuejs.css'
 
Vue.component('VueSlideBar', VueSlideBar)
new Vue({
  render: h => h(App),
}).$mount('#app')
