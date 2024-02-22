<script setup lang="ts">
import TheNavbar from "./components/router/organisms/TheNavbar.vue";
</script>

<template>
    <TheNavbar/>
    <div class="container">
        <router-view/>
    </div>
</template>

<style scoped>
.container {
    padding: 2% 8vw;
}
</style>
