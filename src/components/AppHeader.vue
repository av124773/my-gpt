<template>   
    <div class="app-header">
        <nav class="app-nav">            
            <RouterLink to="/" class="app-new-chat">
                <button class="app-btn btn--icon">
                    <span class="material-symbols-outlined icon">
                        edit_square
                    </span>
                </button>
            </RouterLink>
            <RouterLink to="/about" class="app-new-chat">
                <button class="app-btn app-model-select">
                    <div class="model-select-font-size">
                        ChatGPT 
                    </div>
                    <span class="material-symbols-outlined">
                        arrow_drop_down
                    </span>
                </button>
            </RouterLink>
        </nav>
        <div class="app-auth">
            <RouterLink to="/login"> 
                <button class="app-btn auth-btn btn--login">登入</button>
            </RouterLink>
            <RouterLink to="/signup"> 
                <button class="app-btn auth-btn btn--signup">註冊</button>
            </RouterLink>
            
            
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

        text-decoration: none;
    }
    .btn--icon {
        /* box model */
        border-radius: 8px;
        padding: 0 8px;

        /* visual styling */
        background-color: var(--color-bg-base);
    }
    .btn--icon:hover {
        background-color: var(--color-bg-hover);
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
        color: var(--color-text-base);
        background-color: var(--color-bg-base);
    }
    .app-model-select:hover {
        background-color: var(--color-bg-hover);
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
        background-color: var(--color-primary);
        color: var(--color-text-white);
    }
    .app-btn {
        /* box model */
        border: 0;

        cursor: pointer;
    }

</style>