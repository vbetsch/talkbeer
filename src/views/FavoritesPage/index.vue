<script setup lang="ts">
import BeerList from '../../components/beers/organisms/BeerList.vue';
import { useBeerStore } from '../../stores/BeerStore.ts';
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import AppTitle from '../../components/titles/AppTitle.vue';

const store = useBeerStore();
const { favoriteBeers } = storeToRefs(store);

onMounted(() => {
    store.fetchLocalFavorites();
    store.fetchFavoritesFromData();
});
</script>

<template>
    <AppTitle text="Favorites" />
    <BeerList :list="favoriteBeers" :error="store.errorMessage" :loading="store.isLoading" />
</template>

<style scoped></style>
