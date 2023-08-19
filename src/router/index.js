import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import ResizeImages from '../views/ResizeImages.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ResizeImages,
    },
    
  ]
})

export default router
