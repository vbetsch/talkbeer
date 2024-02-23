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
        value: currentBeer.value.ibu,
        progressBar: {
            width: 150,
            color: "green",
            maxValue: 150
        }
    },
    {
        label: "Couleur",
        alias: "EBC",
        value: currentBeer.value.ebc,
        progressBar: {
            width: 150,
            color: "orange",
            maxValue: 140
        }
    }
]

</script>

<template>
    <div v-if="!store.isLoading && !store.errorMessage" class="details">
        <div class="detail" v-for="info in infos">
            <BeerDetailsInfosLine
                v-if="info.value"
                :label="info.label"
                :alias="info.alias"
                :value="info.value"
                :measurement="info.measurement"
                :progress-bar="info.progressBar"
            />
        </div>
    </div>
</template>

<style scoped>
.details {
    display: flex;
    flex-direction: column;
}
</style>
