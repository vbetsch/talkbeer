<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import {useBeerStore} from "../../stores/BeerStore.ts";
import BeerList from "../HomePage/organisms/BeerList.vue";

const store = useBeerStore()

let localFavorites = ref<number[]>(JSON.parse(localStorage.getItem("favorites") || "[]"))

const updateFavorites = () => {
    localFavorites.value = JSON.parse(localStorage.getItem("favorites") || "[]")
}

onMounted(() => store.setFavoritesBeersFromData(localFavorites.value))

watch(localFavorites.value, (newValue) => store.setFavoritesBeersFromData(newValue))
</script>

<template>
    <h1>Favorites</h1>
    <BeerList
        :list="store.favoriteBeers"
        :error="store.errorMessage"
        :loading="store.isLoading"
    />
</template>

<style scoped>

</style>
