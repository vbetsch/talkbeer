<script setup lang="ts">
import TheNavbarLinksList from '../molecules/AppLinksList.vue';
</script>

<template>
    <div class="navbar">
        <router-link class="link" :to="{ name: 'Home' }">
            <img class="logo" src="/img/talkbeer.png" alt="logo" />
        </router-link>
        <TheNavbarLinksList
            :links="[
                {
                    page: 'Home',
                },
                {
                    page: 'Favorites',
                },
                {
                    page: 'Profile',
                },
            ]"
        />
    </div>
</template>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 10px 2px #ffcb89;
    padding: 2vh 15vw;
    position: fixed;
    background-color: white;
    width: 70%;
    z-index: 9;
    height: 3vh;
}

.link {
    width: 6vw;
    min-width: 100px;
}

.logo {
    width: 100%;
}
</style>
