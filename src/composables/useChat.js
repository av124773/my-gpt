import { useChatStore } from '@/store/chat'

const chatStore = useChatStore()

// 方法一
export function useChat() {
    const messages = chatStore.messages

    const submitMessage = (message) => {
        chatStore.sendMessage(message)
        chatStore.sendMockResponses()
    }

    return {
        messages,
        submitMessage
    }
}
