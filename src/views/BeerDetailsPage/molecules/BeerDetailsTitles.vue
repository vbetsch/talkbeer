<script setup lang="ts">
import {BeerType} from "../../../types/Beer.ts";

export interface BeerDetailsTitlesProps {
    beer: BeerType
}

const props = defineProps<BeerDetailsTitlesProps>()
</script>

<template>
    <div class="titles">
        <h1 class="name">{{ beer.name }}</h1>
        <h2 class="tagline">{{ beer.tagline }}</h2>
    </div>
</template>

<style scoped>
.name {
    font-size: 4em;
    font-weight: normal;
}

.tagline {
    font-size: 2em;
    font-weight: 200;
    font-style: italic;
}
</style>
