<template>
    <div class="app-footer">
        <div class="bottom">
            <span class="footer-font">
                本網站僅為學習目的，旨在透過嘗試復刻
                <a href="https://chatgpt.com/">ChatGPT</a>
                的設計來提升前端開發技能。
            </span>
            <span class="footer-font">
                網站內容不代表任何第三方網站的真實性或所有權，且不涉及商業用途。如有任何版權或使用問題，請
                <a href="mailto:av124773@gmail.com">聯繫我們</a>
                進行處理。
            </span>

        </div>
    </div>
</template>

<style scoped>
    .app-footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px 0;
    }
    .bottom {
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    .footer-font {
        font-size: 14px;
        color: var(--color-primary);
    }

    a {
        color: black;
    }

</style>