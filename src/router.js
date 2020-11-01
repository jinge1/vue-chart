import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/demo1' },
    { path: '/demo1', component: () => import('./pages/demo1') },
    { path: '/demo2', component: () => import('./pages/demo2') },
  ],
})

export default router
