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
    import { useChat } from '@/composables/useChat';
    import AppChatBox from '@/components/AppChatBox.vue';
    import AppMessageList from '@/components/AppMessageList.vue';

    const { submitMessage, autoScrollMainContent } = useChat()

    const handleMessageSubmit = (useMessage) => {
        submitMessage(useMessage)
    }

    // Vue 的 watch() 自身會回傳一個 stopWatch 函式，
    // 這個函式可以用來停止監聽器的運行。
    const stopWatch = autoScrollMainContent()
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