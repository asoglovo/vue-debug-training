import CompositionAPI from '@vue/composition-api'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'
import { router } from './router'
import { makeStore } from './store'

Vue.config.productionTip = false
Vue.use(CompositionAPI)
Vue.use(VueRouter)
Vue.use(Vuex)

new Vue({
  router,
  store: makeStore(),
  render: h => h(App),
}).$mount('#app')
