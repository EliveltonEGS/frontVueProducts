import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/category/GetAllView.vue'
import UpdateView from '../views/category/UpdateView.vue'
import CreateView from '../views/category/CreateView.vue';
import GetAllView from '../views/product/GetAllView.vue';
import DetailView from '../views/product/DetailView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/categories', name: 'categories', component: HomeView},
    {path: '/categories/:id/edit', name: 'udpateCategory', component: UpdateView},
    {path: '/categories/create', name: 'createCategory', component: CreateView},

    {path: '/products', name: 'products', component: GetAllView},
    {path: '/products/:id/detail', name: 'detailProduct', component: DetailView},
  ]
})

export default router