<template>   
    <div class="app-header">
        <nav class="app-nav">
            <div class="app-new-chat">
                <button class="app-btn btn--icon">
                    <span class="material-symbols-outlined icon">
                        edit_square
                    </span>
                </button>
            </div>
            <button class="app-btn app-model-select">
                <div class="model-select-font-size">
                    ChatGPT 
                </div>
                <span class="material-symbols-outlined">
                    arrow_drop_down
                </span>
            </button>
        </nav>
        <div class="app-auth">
            <button class="app-btn auth-btn btn--login">登入</button>
            <button class="app-btn auth-btn btn--logout">註冊</button>
        </div>
    </div>
    
</template>

<style scoped>
    .app-header {
        /* layout */
        display: flex;
        justify-content: space-between;

        /* box model */
        border: 0;
        margin: 0;
        padding: 12px;

        /* typography */
        font-weight: 600;
    }
    .app-nav {
        /* layout */
        display: flex;
    }
    .app-new-chat {
        /* layout */
        display: flex;

        /* box model */
        border: 0;
    }
    .btn--icon {
        /* box model */
        border-radius: 8px;
        padding: 0 8px;

        /* visual styling */
        background-color: var(--bg-color);
    }
    .btn--icon:hover {
        background-color: var(--hover-bg-color);
    }
    .icon {
        /* box model */
        height: 24px; 
        width: 24px;
    }
    .app-model-select {
        /* layout */
        display: flex;
        vertical-align: middle;

        /* box model */
        border: 0;
        border-radius: 8px;
        padding: 6px 12px;

        /* visual styling */
        color: var(--text-color);
        background-color: var(--bg-color);
    }
    .app-model-select:hover {
        background-color: var(--hover-bg-color);
    }
    .model-select-font-size {
        /* typography */
        font-size: 1.125rem;
        line-height: 1.75rem;
    }
    .app-auth {
        /* layout */
        display: flex;
        justify-content: space-between;

        /* box model */
        width: 124px;
    }
    .auth-btn {
        /* box model */
        border-radius: 20px;
        padding: 8px 14px;

        /* typography */
        font-size: 14px;
    }
    .btn--login {
        /* visual styling */
        background-color: var(--primary-color);
        color: var(--text-white-color);
    }
    .app-btn {
        /* box model */
        border: 0;

        cursor: pointer;
    }

</style>