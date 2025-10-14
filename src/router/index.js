import {createRouter, createWebHistory} from 'vue-router'
import Home from "@/pages/Home.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../pages/About.vue'),
        },
        {
            path: '/tools',
            name: 'tools',
            component: () => import('../pages/Tools.vue'),
        },
    ],
    linkActiveClass: 'active',
})

export default router
