<script setup lang="ts">
import {useBeerStore} from "../../stores/BeerStore.ts";
import {onMounted, reactive, ref} from "vue";
import AppSearchBar from "../../components/searchbar/AppSearchBar.vue";
import {BeerType} from "../../types/Beer.ts";
import BeerList from "./organisms/BeerList.vue";

const store = useBeerStore()

let textNoFound = ref<string>("")
let displayOriginalBeers = ref<boolean>(true)
let filteredBeers = reactive<BeerType[]>([])

onMounted(store.setBeersFromData)

const callbackApplyFilter = (data: BeerType[]) => {
    textNoFound.value = data.length ? "" : "No beer found"
    filteredBeers = [
        ...data
    ]
}

const callbackDisplayOriginalList = (state: boolean) => {
    displayOriginalBeers.value = state
}
</script>

<template>
    <div class="subnavbar">
        <AppSearchBar
            placeholder="Rechercher une bière..."
            totalWidth="300px"
            :list="store.allBeers"
            @displayOriginalList="callbackDisplayOriginalList"
            @applyFilter="callbackApplyFilter"/>  <!-- TODO: Move to navbar -->
    </div>
    <span v-if="!displayOriginalBeers && textNoFound">{{ textNoFound }}</span>
    <BeerList
        v-if="!textNoFound"
        :loading="store.isLoading"
        :error="store.errorMessage"
        :list="displayOriginalBeers ? store.allBeers : filteredBeers"
    />
</template>

<style scoped>
.subnavbar {
    display: flex;
    padding: 0 5vw 5vh 5vw;
    justify-content: center;
    align-items: center;
}
</style>
