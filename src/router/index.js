import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/category/GetAllView.vue'
import UpdateView from '../views/category/UpdateView.vue'
import CreateView from '../views/category/CreateView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/categories', name: 'categories', component: HomeView},
    {path: '/categories/:id/edit', name: 'udpateCategory', component: UpdateView},
    {path: '/categories/create', name: 'createCategory', component: CreateView}
  ]
})

export default router
