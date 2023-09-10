import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/pages/Home/index.vue'
import CarItem from '@/pages/CarItem/index.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path:'/CarItem/:keyword?',
        name:'CarItem',
        component:CarItem,
      },
      {
        path: '/:catchAll(.*)',
        redirect:'/'
      }
    ]
});

export default router