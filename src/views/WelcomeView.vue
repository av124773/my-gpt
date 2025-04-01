<template>
    <div class="app-body">
        <h1 class="welcome-message">我可以為你做什麼?</h1>
        <div class="app-chat-box">
            <textarea 
                name="" 
                id="" 
                ref="chatTextarea"
                placeholder="詢問任何問題" 
                class="app-chat-textarea"
                v-model="inputMessage"
                @input="adjustHeight"
                @keydown.enter="handleSubmit($event)"
            ></textarea>
            <div class="btn-toolbar">
                <div class="btn-toolbar-feature">
                    <button class="tool-btn">
                        <span class="material-symbols-outlined icon">
                            attach_file
                        </span>
                        其他
                    </button>
                    <button class="tool-btn">
                        <span class="material-symbols-outlined icon">
                            language
                        </span>
                        搜尋
                    </button>
                    <button class="tool-btn">
                        <span class="material-symbols-outlined icon">
                            lightbulb
                        </span>
                        推理
                    </button>
                </div>
                <div class="btn-toolbar-voice">
                    <button class="voice-btn">
                        <span class="material-symbols-outlined icon">
                            graphic_eq
                        </span>
                        語音
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'

    export default {
        name: 'WelcomeView',
        setup() {
            const router = useRouter()
            const inputMessage = ref('')
            const chatTextarea = ref(null)

            const adjustHeight = () => {
                const textarea = chatTextarea.value
                if (textarea) {
                    textarea.style.height = 'auto'; // 重置高度
                    textarea.style.height = `${textarea.scrollHeight}px`; // 設置為內容高度
                }
            }
            
            const handleSubmit = (event) => {
                if (event.shiftKey) {
                    adjustHeight
                }
                else if (inputMessage.value.trim() !== '') {
                    // 暫時模擬資料送出並清空輸入欄
                    console.log(inputMessage.value)
                    inputMessage.value = ''
                    
                    const textarea = chatTextarea.value;
                    if (textarea) {
                        textarea.style.height = 'auto'; // 先重置為自動
                        textarea.style.height = `${textarea.scrollHeight}px`; // 再設為單行高度
                    }

                    // route to chat view
                }
            }

            return {
                inputMessage,
                chatTextarea,
                adjustHeight,
                handleSubmit
            }
        },
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
    .app-chat-box {
        display: flex;
        flex-direction: column;
        width: 100%;
        
        /* box model */
        padding: 20px;
        border-radius: 20px;
        box-shadow: 1px 1px 4px 1px gainsboro;

    }
    .app-chat-textarea {
        /* box model */
        border: 0;
        width: 100%;
        max-height: 200px;

        resize: none;
    }
    .app-chat-textarea:focus {
        outline: none;
    }
    .btn-toolbar {
        /* layout */
        display: flex;
        justify-content: space-between;
    }
    .btn-toolbar-feature {
        /* layout */
        display: flex;
        gap: 0.5rem;
    }
    .tool-btn {
        /* layout */
        display: flex;
        gap: 4px;

        /* box model */
        border: 1px solid var(--color-border-light);
        border-radius: 20px;
        padding: 8px;
        min-width: 2rem;

        /* visual styling */
        background-color: var(--color-border-light);

        /* other */
        cursor: pointer;
    }
    .voice-btn {
        /* layout */
        display: flex;

        /* box model */
        border: 0;
        border-radius: 20px;
        padding: 8px;

        /* visual styling */
        color: var(--color-text-white);
        background-color: var(--color-primary);

        /* other */
        cursor: pointer;
    }
    .voice-btn .icon {
        /* visual styling */
        color: var(--color-text-white);
    }
     .icon {
        font-size: 18px;
     }
</style>
