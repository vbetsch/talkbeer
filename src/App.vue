<script setup lang="ts">
import TheNavbar from './components/links/organisms/TheNavbar.vue';
</script>

<template>
    <TheNavbar />
    <div class="container">
        <router-view />
    </div>
</template>

<style scoped>
.container {
    padding: 12vh 8vw;
}
</style>
