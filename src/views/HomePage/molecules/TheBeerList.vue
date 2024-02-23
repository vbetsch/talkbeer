<script setup lang="ts">
import {useBeerStore} from "../../../stores/BeerStore.ts";
import {onMounted} from "vue";
import AppStateManagement from "../../../components/states/molecules/AppStateManagement.vue";
import BeerItem from "../atoms/BeerItem.vue";
import {storeToRefs} from "pinia";

const store = useBeerStore()
const {allBeers} = storeToRefs(store)

onMounted(store.setBeersFromData)
</script>

<template>
    <AppStateManagement :loading="store.isLoading" :errorMessage="store.errorMessage"/>
    <div v-if="!store.isLoading" class="beers">
        <BeerItem :beer="beer" v-for="beer in allBeers"/>
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
