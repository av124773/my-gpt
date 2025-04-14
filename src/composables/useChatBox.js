export function useChatBox() {  
    const adjustTextareaHeight = (textarea) => {
        if (textarea) {
            textarea.style.height = 'auto'; // 重置高度
            textarea.style.height = `${textarea.scrollHeight}px`; // 設置為內容高度
        }
    }
    return {
        adjustTextareaHeight
    }
}
