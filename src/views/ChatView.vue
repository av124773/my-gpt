<template>
    <div class="app-body">
        <div class="chat-room">
            <AppMessageList />
        </div>
        <div class="chat-box-wrapper">
            <AppChatBox @submit-message="handleMessageSubmit" />
        </div>
    </div>
</template>

<script setup>
    import { nextTick, watch } from 'vue';
    import { useChatStore } from '@/store/chat'
    import AppChatBox from '@/components/AppChatBox.vue';
    import AppMessageList from '@/components/AppMessageList.vue';

    const chatStore = useChatStore()

    const handleMessageSubmit = (message) => {
        chatStore.sendMessage(message)
        chatStore.sendMockResponses()
        console.log(chatStore.messages)
    }

    watch(
        () => chatStore.messages,
        () => {
            nextTick(() => {
                const mainContent = document.querySelector('.main-content')
                if (mainContent) {
                    mainContent.scrollTop = mainContent.scrollHeight
                }
            })
        },
        { deep: true }
    )
</script>

<style>
    .app-body {
        /* layout */
        display: flex;
        flex-direction: column;
        flex: 1;
        
        /* box model */
        margin: 0 auto;
        width: 100%;
        max-width: 48rem;
        min-height: 100%;

    }
    .chat-room {
        flex: 1;
    }
    .chat-box-wrapper {
        position: sticky;
        bottom: 0;

        padding: 5px 0;

        background: white;
    }
</style>