<script setup lang="ts">
import BeerDetailsInfosLine, {BeerDetailsInfosLineProps} from "../atoms/BeerDetailsInfosLine.vue";
import {useBeerStore} from "../../../stores/BeerStore.ts";
import {storeToRefs} from "pinia";
import {router} from "../../../Router.ts";
import {onMounted} from "vue";

const store = useBeerStore()
const {currentBeer} = storeToRefs(store)

const beerId = router?.currentRoute?.value?.params?.beerId as string

onMounted(() => store.setCurrentBeerFromData(beerId))

const infos: BeerDetailsInfosLineProps[] = [
    {
        label: "Alcoolémie",
        alias: "ABV",
        value: currentBeer.value.abv,
        measurement: "%"
    },
    {
        label: "Acidité",
        alias: "PH",
        value: currentBeer.value.ph
    },
    {
        label: "Amertume",
        alias: "IBU",
        progressBar: {
            width: 150,
            color: "blue",
            value: currentBeer.value.ibu,
            maxValue: 150
        }
    },
    {
        label: "Couleur",
        alias: "EBC",
        progressBar: {
            width: 150,
            color: "green",
            value: currentBeer.value.ebc,
            maxValue: 140
        }
    }
]

</script>

<template>
    <div v-if="!store.isLoading && !store.errorMessage" class="details">
        <BeerDetailsInfosLine
            v-for="info in infos"
            :label="info.label"
            :alias="info.alias"
            :value="info.value"
            :measurement="info.measurement"
            :progress-bar="info.progressBar"
        />
    </div>
</template>

<style scoped>
.details {
    display: flex;
    flex-direction: column;
}
</style>
