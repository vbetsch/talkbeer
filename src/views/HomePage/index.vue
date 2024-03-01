<script setup lang="ts">
import { useBeerStore } from '../../stores/BeerStore.ts';
import { onMounted, reactive, ref } from 'vue';
import AppSearchBar from '../../components/searchbar/AppSearchBar.vue';
import { BeerType } from '../../types/Beer.ts';
import BeerList from '../../components/beers/organisms/BeerList.vue';
import { storeToRefs } from 'pinia';
import { replaceArrayTo } from '../../services/ArrayService.ts';
import AppDefaultText from '../../components/states/atoms/AppDefaultText.vue';

const store = useBeerStore();
const { allBeers } = storeToRefs(store);

let textNoFound = ref<string>('');
let displayOriginalBeers = ref<boolean>(true);
let filteredBeers = reactive<BeerType[]>([]);

onMounted(store.fetchAllBeers);

const callbackApplyFilter = (data: BeerType[]) => {
    textNoFound.value = data.length ? '' : 'No beer found';
    filteredBeers = replaceArrayTo(data);
};

const callbackDisplayOriginalList = (state: boolean) => {
    displayOriginalBeers.value = state;
};
</script>

<template>
    <div class="subnavbar">
        <AppSearchBar
            placeholder="Rechercher une bière..."
            total-width="300px"
            :list="allBeers"
            @display-original-list="callbackDisplayOriginalList"
            @apply-filter="callbackApplyFilter"
        />
        <!-- TODO: Move to navbar -->
    </div>
    <AppDefaultText v-if="!displayOriginalBeers" :text="textNoFound" />
    <BeerList
        v-if="!textNoFound"
        :loading="store.isLoading"
        :error="store.errorMessage"
        :list="displayOriginalBeers ? allBeers : filteredBeers"
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
