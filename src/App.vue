<script setup>
//  my script
import AppHeader from './components/AppHeader.vue';
import AppBody from './components/AppBody.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<template>
    <div class="app">
        <AppHeader/>
        <!-- <AppBody /> -->
        <!-- <RouterView /> -->
        <RouterView />
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
    }
</style>
