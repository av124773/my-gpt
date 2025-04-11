import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: () => import('@/views/WelcomeView.vue'),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/AboutView.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/LoginView.vue')
    },
    {
        path: '/chat',
        name: 'Chat',
        component: () => import('@/views/ChatView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router