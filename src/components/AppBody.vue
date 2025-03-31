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
                @input="adjustHeight"
                @keyup.enter="adjustHeight"
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
    export default {
        name: 'ChatBox',
        mounted() {
            this.adjustHeight()
        },
        methods: {
            adjustHeight() {
                const textarea = this.$refs.chatTextarea
                textarea.style.height = 'auto'; // 重置高度
                textarea.style.height = `${textarea.scrollHeight}px`; // 設置為內容高度
            },
            handleEnter(event) {
                setTimeout(() => this.adjustHeight(), 0)
            }
        }
    }
</script>

<style scoped>
    .app-body {
        /* layout */
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        
        /* box model */
        margin: auto;
        height: 50vh;
        max-width: 48rem;
    }
    .app-chat-box {
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
        border: 1px solid var(--border-light);
        border-radius: 20px;
        padding: 8px;
        min-width: 2rem;

        /* visual styling */
        background-color: var(--btn-non-color);

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
        color: var(--text-white-color);
        background-color: var(--btn-black-color);

        cursor: pointer;
    }
    .voice-btn .icon {
        /* visual styling */
        color: var(--text-white-color);
    }
     .icon {
        font-size: 18px;
     }
</style>
