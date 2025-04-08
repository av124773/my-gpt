import { createRouter, createWebHistory } from 'vue-router'

import WelcomeView from '@/views/WelcomeView.vue'
import AboutView from '@/views/AboutView.vue'
import LoginView from '@/views/LoginView.vue'
import ChatView from '@/views/ChatView.vue'

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
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginView
    },
    {
        path: '/chat',
        name: 'Chat',
        component: ChatView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router