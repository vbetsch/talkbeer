<script setup lang="ts">
import AppStateManagement from "../../../components/states/molecules/AppStateManagement.vue";
import BeerDetailsInfos from "../molecules/BeerDetailsInfos.vue";
import {BeerType} from "../../../types/Beer.ts";

export interface BeerDetailsProps {
    beer: BeerType
    loading: boolean
    error: string
}

const props = defineProps<BeerDetailsProps>()
</script>

<template>
    <div class="infos">
        <AppStateManagement :loading="loading" :errorMessage="error"/>
        <h1 class="name">{{ beer.name }}</h1>
        <h2 class="tagline">{{ beer.tagline }}</h2>
        <p class="description">{{ beer.description }}</p>
        <BeerDetailsInfos :loading="loading" :error="error" :beer="beer"/>
    </div>
</template>

<style scoped>
.infos {
    width: 40%;
}

.name {
    font-size: 4em;
    font-weight: normal;
}

.tagline {
    font-size: 2em;
    font-weight: 200;
    font-style: italic;
}

.description {
    font-size: 1.2em;
    text-justify: auto;
}
</style>
