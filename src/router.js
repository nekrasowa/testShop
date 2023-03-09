import { createRouter, createWebHistory } from 'vue-router'
import AppMainHome from './components/AppMainHome.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AppMainHome
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: () => import('./components/AppMainCatalog.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
