import { createRouter, createWebHistory } from 'vue-router'

import WelcomeView from '@/views/WelcomeView.vue'

const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: WelcomeView,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router