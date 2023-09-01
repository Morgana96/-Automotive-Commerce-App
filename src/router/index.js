import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/pages/Home'
import CarItem from '@/pages/CarItem'

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