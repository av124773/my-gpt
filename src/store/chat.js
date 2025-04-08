import { defineStore } from "pinia";
import { ref } from "vue";
import mockResponses from "@/assets/fackData";

export const useChatStore = defineStore('chatStore', () => {
    const messages = ref([])

    const sendMessage = (content) => {
        const tokenLength = content.length
        const timestamp = new Date().toLocaleString()
        messages.value.push({
            content,
            timestamp,
            tokenLength,
            sender: 'user'
        })
    }

    const sendMockResponses = () => {
        const randomIndex = Math.floor(Math.random() * mockResponses.length)
        const response = mockResponses[randomIndex]
        const timestamp = new Date().toLocaleString()
        messages.value.push({
            content: response.content,
            timestamp,
            tokenLength: response.tokenLength,
            sender: 'ai'
        })
    }

    return {
        messages,
        sendMessage,
        sendMockResponses
    }
})