<script setup lang="ts">
import BeerDetailsInfos from "../molecules/BeerDetailsInfos.vue";
import {BeerType} from "../../../types/Beer.ts";
import BeerDetailsTitles from "../molecules/BeerDetailsTitles.vue";

export interface BeerDetailsProps {
    beer: BeerType
    loading: boolean
    error: string
}

const props = defineProps<BeerDetailsProps>()
</script>

<template>
    <div v-if="!loading" class="infos">
        <BeerDetailsTitles :beer="beer"/>
        <div class="more">
            <span>Contributed by <span class="value">{{ beer.contributed_by }}</span></span>
            <span>First Brewed <span class="value">{{ beer.first_brewed }}</span></span>
        </div>
        <section class="section description">
            <h4 class="title">Description</h4>
            <span class="section-content">{{ beer.description }}</span>
        </section>
        <section class="section">
            <h4 class="title">Details</h4>
            <div class="section-content">
                <BeerDetailsInfos :loading="loading" :error="error" :beer="beer"/>
            </div>
        </section>
    </div>
</template>

<style scoped>
.infos {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.section-content {
    font-size: 1.2em;
    text-justify: auto;
    border-left: 1px solid var(--light-grey);
    padding-left: 20px;
}

.more {
    display: flex;
    gap: 30px;
    color: var(--grey);
}

.more .value {
    color: var(--black);
    font-weight: normal;
}

.section {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
}

.title {
    text-transform: uppercase;
    font-weight: normal;
    color: var(--grey);
    font-size: 14px;
}
</style>
