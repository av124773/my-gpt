import { nextTick, watch } from 'vue';
import { useChatStore } from '@/store/chat'

const chatStore = useChatStore()

export function useChat() {
    const messages = chatStore.messages

    const submitMessage = (message) => {
        chatStore.sendMessage(message)
        chatStore.sendMockResponses()
    }

    const autoScrollMainContent = () => {
        // watch() 會回傳一個 stopWatch函式，用來停止監聽
        // 這邊用一個變數來接這個回傳函式並回傳，以便後續有需要時可以停止監聽
        const stopWatch = watch(
            () => messages,
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
        return stopWatch
    }

    return {
        messages,
        submitMessage,
        autoScrollMainContent
    }
}
