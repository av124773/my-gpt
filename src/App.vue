<script setup>
//  my script
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<template>
    <div class="app">
        <AppHeader/>
        <div class="main-content">
            <RouterView />
        </div>
        <AppFooter />
    </div>
  
</template>

<style scoped>
/* my style */
    .app {
        display: flex;
        flex-direction: column;
        height: 100vh;   
        width: 100%; 
        position: relative;
    }
    .main-content {
        flex: 1;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
    }
    .main-content::-webkit-scrollbar {
        width: 5px;
        opacity: 0;
        transition: opacity 0.3s;
    }
    .main-content::-webkit-scrollbar-track {
        background: transparent;
    }
    .main-content::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.2);
    }
    .main-content::-webkit-scrollbar-thumb:hover {
        background: rgba(0, 0, 0, 0.3);
    }
</style>
