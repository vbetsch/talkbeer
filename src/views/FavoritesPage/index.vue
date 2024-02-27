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
    <h1>Favorites</h1>
    <BeerList
        :list="favoriteBeers"
        :error="store.errorMessage"
        :loading="store.isLoading"
    />
</template>

<style scoped>

</style>
