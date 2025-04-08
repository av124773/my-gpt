<template>
    <div class="app-message-list">
        <div 
            v-for="(message, index) in messages"
            :key="index"
            :class="['message', message.sender === 'user' ? 'user-message' : 'ai-message']"
        >
            {{message.content}}
        </div>
    </div>
</template>

<script setup>
    import { useChatStore } from '@/store/chat';

    const chatStore = useChatStore()
    const messages = chatStore.messages
</script>

<style>
    
    .app-message-list {
        max-height: 60vh;
        overflow-y: auto;
    }
    .app-message-list::-webkit-scrollbar {
        width: 5px;
        opacity: 0;
        transition: opacity 0.3s;
    }
    .app-message-list::-webkit-scrollbar-track {
        background: transparent;
    }
    .app-message-list::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.2);
    }
    .app-message-list::-webkit-scrollbar-thumb:hover {
        background: rgba(0, 0, 0, 0.3);
    }
    .message {
        border-radius: 1.5rem;
        padding: 10px 20px;

        white-space: normal;
        overflow-wrap: break-word;

    }
    .user-message {
        margin-left: auto;
        margin-bottom: 30px;
        text-align: right;
        width: fit-content;
        max-width: 70%;

        background-color: var(--color-bg-hover);
    }
    .ai-message {
        margin-right: auto;
        margin-bottom: 30px;
        text-align: left;
        
    }
</style>