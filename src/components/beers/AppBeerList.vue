<script setup lang="ts">
import AppBeerItem from "./AppBeerItem.vue";

defineProps<{
    beers: BeerType[]
    loading: boolean
    error: string
}>()
</script>

<template>
    <p v-if="loading" class="loading">Loading...</p>
    <p v-else-if="error" class="error">{{ error }}</p>
    <div v-else class="beers">
        <AppBeerItem :beer="beer" v-for="beer in beers"/>
    </div>
</template>

<style scoped>
.beers {
    display: grid;
    grid-template-columns: repeat(auto-fill, 10vw);
    row-gap: 5vh;
}

@media (max-width: 1100px) {
    .beers {
        grid-template-columns: repeat(auto-fill, 25vw);
    }
}
</style>
