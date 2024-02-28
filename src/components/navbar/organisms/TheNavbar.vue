<script setup lang="ts">
import TheNavbarLinksList from "../molecules/TheNavbarLinksList.vue";
// import AppSearchBar from "../../searchbar/AppSearchBar.vue";
</script>

<template>
    <div class="navbar">
        <router-link class="link" :to="{ name: 'Home' }">
            <img class="logo" src="/img/talkbeer.png" alt="logo">
        </router-link>
        <!-- TODO: Put search bar here -->
        <!-- <AppSearchBar placeholder="Rechercher une bière..."/>-->
        <TheNavbarLinksList :links="[
            {
                page: 'Home'
            },
            {
                page: 'Favorites'
            },
            {
                page: 'Login'
            },
        ]"/>
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
