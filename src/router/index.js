import { createRouter, createWebHistory } from 'vue-router'
import AddView from '../views/AddView.vue'
import homeView from '../views/HomeView.vue'
import updateView from '../views/UpdateView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: homeView
  },
  {
    path: '/add',
    name: 'add-view',
    component: AddView
  },
  {
    path: '/update/:id',
    name: 'update-view',
    component: updateView,
    props:true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
