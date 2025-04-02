<template>
    <div class="app-login">
        <h1 class="title-message">歡迎回來</h1>
        <div class="login-container">
            <div class="login-input">
                <input type="email">
                <input type="password">
                <button class="btn-continue">繼續</button>
            </div>
            <div class="divider">這裡是分隔線</div>
            <div class="login-third-party">
                <button class="btn-third-party">
                    使用 Google 帳號繼續
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .app-login {
        /* layout */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        text-align: center;
        flex: 1;
        
        /* box model */
        margin: 0 auto;
        width: 100%;
    }
    .title-message {
        padding: 0 40px 24px;
        width: 320px;
    }
    .login-container {
        display: flex;
        flex-direction: column;
        padding: 0 40px 40px;
        border-radius: 3px;
        width: 320px;
    }
    .login-input {
        display: flex;
        flex-direction: column;

        margin-bottom: 20px;

        width: 100%;
    }
    .btn-continue {
        margin: 0;
        border: 1px solid gainsboro;
        border-radius: 6px;
        padding: 4px 16px;

        font-size: 16px;
    }
    .login-third-party {
        display: flex;
        flex-direction: column;

        width: 100%;
    }
    .btn-third-party {
        font-size: 16px;
    }

</style>