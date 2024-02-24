<script setup lang="ts">
import AppStateManagement from "../../components/states/molecules/AppStateManagement.vue";
import {onMounted} from "vue";
import {useBeerStore} from "../../stores/BeerStore.ts";
import {storeToRefs} from "pinia";
import BeerItem from "./molecules/BeerItem.vue";

const store = useBeerStore()
const {allBeers} = storeToRefs(store)

onMounted(store.setBeersFromData)
</script>

<template>
    <AppStateManagement :loading="store.isLoading" :errorMessage="store.errorMessage"/>
    <div v-if="!store.isLoading && !store.errorMessage" class="beers">
        <BeerItem :beer="beer" v-for="beer in allBeers.sort((beerA, beerB) => beerA.name.localeCompare(beerB.name))"/>
    </div>
</template>

<style scoped>
.beers {
    display: grid;
    grid-template-columns: repeat(auto-fill, 10vw);
    column-gap: 1vw;
    row-gap: 5vh;
}

@media (max-width: 1100px) {
    .beers {
        grid-template-columns: repeat(auto-fill, 25vw);
    }
}
</style>
