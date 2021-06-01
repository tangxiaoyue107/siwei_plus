import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementPlus);
import VueCookies from "vue-cookie"
Vue.use(VueCookies);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
