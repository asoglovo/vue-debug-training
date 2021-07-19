import VueRouter from 'vue-router'
import Elements from './components/elements-exercise/Elements.vue'
import Network from './components/network-exercise/Network.vue'
import Home from './components/Home.vue'
import Sources from './components/sources-exercise/Sources.vue'

export const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/elements', component: Elements },
    { path: '/network', component: Network },
    { path: '/sources', component: Sources },
  ]
})
