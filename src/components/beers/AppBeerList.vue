<script setup lang="ts">
import AppBeerItem from "./AppBeerItem.vue";
import AppStateManagement from "../states/molecules/AppStateManagement.vue";

defineProps<{
    beers: BeerType[]
    loading: boolean
    error: string
}>()
</script>

<template>
    <AppStateManagement :loading="loading" :errorMessage="error"/>
    <div class="beers">
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
