<script setup lang="ts">
import BeerList from "../../components/beers/organisms/BeerList.vue";
import {useBeerStore} from "../../stores/BeerStore.ts";
import {onMounted} from "vue";
import {storeToRefs} from "pinia";

const store = useBeerStore()
const {favoriteBeers} = storeToRefs(store)

onMounted(() => {
    store.fetchLocalFavorites()
    store.fetchFavoritesFromData()
})
</script>

<template>
    <div class="title">
        <h1 class="text">Favorites</h1>
    </div>
    <BeerList
        :list="favoriteBeers"
        :error="store.errorMessage"
        :loading="store.isLoading"
    />
</template>

<style scoped>
.title {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0 7vw 5vh 7vw;
}

.title .text {
    font-weight: normal;
    font-size: 3em;
}
</style>
