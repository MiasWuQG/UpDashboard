import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('../views/DashboardView.vue'),
    },
    {
      path: '/resources',
      name: 'Resources',
      component: () => import('../views/ResourcesView.vue'),
    },
    {
      path: '/llm',
      name: 'LLM',
      component: () => import('../views/LLMView.vue'),
    },
  ],
});

export default router;