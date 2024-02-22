<script setup lang="ts">
import TheNavbarLinksList from "../molecules/TheNavbarLinksList.vue";
</script>

<template>
    <div class="navbar">
        <router-link :to="{ name: 'Home' }">
            <img class="logo" src="/img/talkbeer.png" alt="logo">
        </router-link>
        <TheNavbarLinksList :links="[
            {
                page: 'Home'
            },
        ]"/>
    </div>
</template>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2vh 8vw;
    box-shadow: 0 0 10px 2px rgb(194, 194, 194);
}

.logo {
    min-width: 100px;
    width: 15%;
}
</style>
