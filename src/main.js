import Vue from 'vue'
import Buefy from 'buefy'
//import 'buefy/dist/buefy.css'
import VueRouter from 'vue-router'
import router from './router'
import VueMoment from 'vue-moment'
import App from './App.vue'

Vue.use(Buefy);
Vue.use(VueRouter);
Vue.use(VueMoment);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
