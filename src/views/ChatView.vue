<template>
    <div class="app-body">
        <div class="chat-room">
            <AppMessageList />
        </div>
        <AppChatBox @submit-message="handleMessageSubmit" />
    </div>
</template>

<script setup>
    import AppChatBox from '@/components/AppChatBox.vue';
    import AppMessageList from '@/components/AppMessageList.vue';
    import { useChatStore } from '@/store/chat'

    const chatStore = useChatStore()

    const handleMessageSubmit = (message) => {
        chatStore.sendMessage(message)
        chatStore.sendMockResponses()
        console.log(chatStore.messages)
    }
</script>

<style>
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
    .chat-room {
        flex: 1;
    }
</style>