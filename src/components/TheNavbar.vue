<script setup lang="ts">

</script>

<template>
    <div class="navbar">
        <router-link class="link" :to="{ name: 'Home' }">
            <img class="logo" src="/img/talkbeer.png" alt="logo">
        </router-link>
        <div class="links">
            <router-link class="link" :to="{ name: 'Home' }">
                <span>Home</span>
            </router-link>
        </div>
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

.links {
    width: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20%;
}

.link {
    display: flex;
    text-decoration: none;
    color: var(--black);
}

.link:hover {
    text-decoration: underline;
}
</style>
