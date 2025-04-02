import { createRouter, createWebHistory } from 'vue-router'

import WelcomeView from '@/views/WelcomeView.vue'
import AboutView from '@/views/AboutView.vue'

const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: WelcomeView,
    },
    {
        path: '/about',
        name: 'About',
        component: AboutView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router