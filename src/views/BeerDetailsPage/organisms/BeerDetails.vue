<script setup lang="ts">
import BeerDetailsInfos from "../molecules/BeerDetailsInfos.vue";
import {BeerType} from "../../../types/Beer.ts";
import BeerDetailsTitles from "../molecules/BeerDetailsTitles.vue";
import AppButton from "../../../components/buttons/AppButton.vue";
import {faHeart as faRegularHeart} from "@fortawesome/free-regular-svg-icons";
import {faHeart as faSolidHeart} from "@fortawesome/free-solid-svg-icons";
import {computed, ref} from "vue";
import {useBeerStore} from "../../../stores/BeerStore.ts";
import {storeToRefs} from "pinia";
import InfoList from "../../../components/text/molecules/InfoList.vue";
import BeerDetailsSection from "../molecules/BeerDetailsSection.vue";

export interface BeerDetailsProps {
    beer: BeerType
    loading: boolean
    error: string
}

const props = defineProps<BeerDetailsProps>()

const emit = defineEmits<{
    addBeerToFavorites: []
    removeBeerToFavorites: []
}>()

const store = useBeerStore()
const {favoriteIdBeers} = storeToRefs(store)

let isFavorited = ref<boolean>(favoriteIdBeers.value.includes(props.beer.id))
let isHover = ref<boolean>(false)

const WHITE: string = "var(--white)"
const PINK: string = "#ff00e3"

const computeButtonStyle = computed(() =>
    isHover.value ?
        `color: ${isFavorited.value ? WHITE : PINK};` :
        `color: ${isFavorited.value ? PINK : WHITE};`
)

const callbackDoAction = () => {
    if (isFavorited.value) {
        isFavorited.value = false
        emit('removeBeerToFavorites')
    } else {
        isFavorited.value = true
        emit('addBeerToFavorites')
    }
}
</script>

<template>
    <div v-if="!loading && !error" class="infos">
        <BeerDetailsTitles :beer="beer"/>
        <div class="more">
            <InfoList :list="[
                {
                    title: 'Contributed by',
                    value: beer.contributed_by
                },
                {
                    title: 'First Brewed',
                    value: beer.first_brewed
                },
            ]"/>
            <AppButton
                class="button"
                :icon="isFavorited ? faSolidHeart : faRegularHeart"
                :style="computeButtonStyle"
                @mouseenter="isHover = true"
                @mouseleave="isHover = false"
                @doAction="callbackDoAction"
            />
        </div>
        <BeerDetailsSection subtitle="Description">
            {{ beer.description }}
        </BeerDetailsSection>
        <BeerDetailsSection subtitle="Details">
            <BeerDetailsInfos :loading="loading" :error="error" :beer="beer"/>
        </BeerDetailsSection>
    </div>
</template>

<style scoped>
.infos {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.more {
    display: flex;
    align-items: center;
    gap: 30px;
}

.more .button {
    background-color: #230033;
}
</style>
