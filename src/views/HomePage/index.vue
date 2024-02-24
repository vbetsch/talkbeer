<script setup lang="ts">
import BeerList from "./organisms/BeerList.vue";
import {useBeerStore} from "../../stores/BeerStore.ts";
import {onMounted, reactive, ref} from "vue";
import AppSearchBar from "../../components/searchbar/AppSearchBar.vue";
import {BeerType} from "../../types/Beer.ts";

const store = useBeerStore()
let displayedBeers = reactive<BeerType[]>(store.allBeers)
let searchMode = ref<boolean>(false)

onMounted(store.setBeersFromData)

const callbackApplyFilter = (text: string) => {
    searchMode.value = true;
    displayedBeers = store.allBeers.filter((beer: BeerType) => (beer.name.includes(text)))
}

const callbackDisableSearchMode = () => searchMode.value = false
</script>

<template>
    <AppSearchBar
        placeholder="Rechercher... (temp)"
        totalWidth="150px"
        @applyFilter="callbackApplyFilter"
        @disableSearchMode="callbackDisableSearchMode"/>  <!-- TODO: Move to navbar -->
    <BeerList
        :loading="store.isLoading"
        :error="store.errorMessage"
        :list="searchMode ? displayedBeers : store.allBeers"
    />
</template>

<style scoped>
</style>
