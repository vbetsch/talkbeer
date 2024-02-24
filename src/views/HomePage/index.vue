<script setup lang="ts">
import BeerList from "./organisms/BeerList.vue";
import {useBeerStore} from "../../stores/BeerStore.ts";
import {storeToRefs} from "pinia";
import {onMounted} from "vue";
import AppSearchBar from "../../components/searchbar/AppSearchBar.vue";

const store = useBeerStore()
const {allBeers} = storeToRefs(store)

onMounted(store.setBeersFromData)
</script>

<template>
    <AppSearchBar placeholder="Rechercher... (temp)" totalWidth="150px"/>     <!-- TODO: Move to navbar -->
    <BeerList :loading="store.isLoading" :error="store.errorMessage" :list="allBeers"/>
</template>

<style scoped>
</style>
