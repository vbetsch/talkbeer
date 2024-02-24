<script setup lang="ts">
import BeerList from "./organisms/BeerList.vue";
import {useBeerStore} from "../../stores/BeerStore.ts";
import {onMounted, reactive, ref} from "vue";
import AppSearchBar from "../../components/searchbar/AppSearchBar.vue";
import {BeerType} from "../../types/Beer.ts";

const store = useBeerStore()
const textNoFound = ref<string>("")
let displayOriginalBeers = ref<boolean>(true)
let displayedBeers = reactive<BeerType[]>(store.allBeers)

onMounted(store.setBeersFromData)

const callbackApplyFilter = (data: BeerType[]) => {
    console.log("(24/02/2024 20:48) @vbetsch [ index.vue:14 -  - callbackApplyFilter ] data", data);
    textNoFound.value = data.length ? "" : "No beer found"
    displayedBeers = [
        ...data
    ]
}

const callbackDisplayOriginalList = (state: boolean) => {
    displayOriginalBeers.value = state
    console.log( "(24/02/2024 21:23) @vbetsch [ index.vue:24 -  - callbackDisplayOriginalList ] displayOriginalBeers.value", displayOriginalBeers.value );
}
</script>

<template>
    <AppSearchBar
        placeholder="Rechercher... (temp)"
        totalWidth="150px"
        :list="store.allBeers"
        @displayOriginalList="callbackDisplayOriginalList"
        @applyFilter="callbackApplyFilter"/>  <!-- TODO: Move to navbar -->
    <span v-if="!displayOriginalBeers && textNoFound">{{ textNoFound }}</span>
    <BeerList
        v-else
        :loading="store.isLoading"
        :error="store.errorMessage"
        :list="displayOriginalBeers ? store.allBeers : displayedBeers"
    />
</template>

<style scoped>
</style>
