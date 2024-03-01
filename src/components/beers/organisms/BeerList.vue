<script setup lang="ts">
import BeerItem from '../molecules/BeerItem.vue';
import AppStateManagement from '../../../components/states/molecules/AppStateManagement.vue';
import { BeerType } from '../../../types/Beer.ts';
import AppDefaultText from '../../states/atoms/AppDefaultText.vue';

export interface BeerListProps {
    list: BeerType[];
    loading: boolean;
    error: string;
}

defineProps<BeerListProps>();
</script>

<template>
    <AppStateManagement :loading="loading" :errorMessage="error" />
    <div v-if="!loading && !error && list.length" class="beers">
        <BeerItem
            :beer="beer"
            v-for="beer in list.sort((beerA, beerB) => beerA.name.localeCompare(beerB.name))"
        />
    </div>
    <div v-if="!loading && !error && !list.length">
        <AppDefaultText text="No beer found" />
    </div>
</template>

<style scoped>
.beers {
    display: grid;
    grid-template-columns: repeat(auto-fill, 10vw);
    justify-content: center;
    column-gap: 1vw;
    row-gap: 5vh;
}

@media (max-width: 1100px) {
    .beers {
        grid-template-columns: repeat(auto-fill, 25vw);
    }
}
</style>
