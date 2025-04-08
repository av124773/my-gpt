<template>
    <div class="app-body">
        <h1 class="welcome-message">我可以為你做什麼?</h1>
        <AppChatBox @submit-message="handleMessageSubmit"/>

    </div>
</template>

<script setup>
    import { useRouter } from 'vue-router';
    import AppChatBox from '@/components/AppChatBox.vue'
    import { useChatStore } from '@/store/chat'

    const router = useRouter()
    const chatStore = useChatStore()

    const handleMessageSubmit = (message) => {
        chatStore.sendMessage(message)
        chatStore.sendMockResponses()
        router.push('/chat')
    }
</script>

<style scoped>
    .app-body {
        /* layout */
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        flex: 1;
        
        /* box model */
        margin: 0 auto;
        width: 100%;
        max-width: 48rem;
    }
</style>
