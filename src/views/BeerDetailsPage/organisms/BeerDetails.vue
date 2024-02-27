<script setup lang="ts">
import BeerDetailsInfos from "../molecules/BeerDetailsInfos.vue";
import {BeerType} from "../../../types/Beer.ts";
import BeerDetailsTitles from "../molecules/BeerDetailsTitles.vue";
import AppButton from "../../../components/buttons/AppButton.vue";
import {faHeart as faRegularHeart} from "@fortawesome/free-regular-svg-icons";
import {faHeart as faSolidHeart} from "@fortawesome/free-solid-svg-icons";
import {computed, ref} from "vue";

export interface BeerDetailsProps {
    beer: BeerType
    loading: boolean
    error: string
}

const props = defineProps<BeerDetailsProps>()

let favorites = ref<number[]>(JSON.parse(localStorage.getItem("favorites") || "[]"));
let isFavorited = ref<boolean>(favorites && favorites.value.includes(props.beer.id))

const computeButtonStyle = computed(() => `color: ${isFavorited.value ? "#ff00e3" : "var(--white)"};`)

const addBeerToFavorites = () => {
    favorites.value = [
        ...favorites.value,
        props.beer.id
    ]
}
const removeBeerToFavorites = () => {
    const index = favorites.value.indexOf(props.beer.id, 0);
    if (index > -1) {
        favorites.value.splice(index, 1);
    }
}

const callbackDoAction = () => {
    if (favorites.value.includes(props.beer.id)) {
        removeBeerToFavorites()
        isFavorited.value = false
    } else {
        addBeerToFavorites()
        isFavorited.value = true
    }
    localStorage.setItem("favorites", JSON.stringify(favorites.value));
}
</script>

<template>
    <div v-if="!loading" class="infos">
        <BeerDetailsTitles :beer="beer"/>
        <div class="more">
            <span>Contributed by <span class="value">{{ beer.contributed_by }}</span></span>
            <span>First Brewed <span class="value">{{ beer.first_brewed }}</span></span>
            <AppButton
                class="button"
                :icon="isFavorited ? faSolidHeart : faRegularHeart"
                :style="computeButtonStyle"
                @doAction="callbackDoAction"
            />
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
    align-items: center;
    gap: 30px;
    color: var(--grey);
}

.more .value {
    color: var(--black);
    font-weight: normal;
}

.more .button {
    background-color: #230033;
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
