<script setup lang="ts">
import BeerDetailsInfosLine, {BeerDetailsInfosLineProps} from "../atoms/BeerDetailsInfosLine.vue";
import AppStateManagement from "../../../components/states/molecules/AppStateManagement.vue";

interface BeerDetailsInfosProps {
    beer: BeerType
    loading: boolean
    error: string
}

const props = defineProps<BeerDetailsInfosProps>()

const infos: BeerDetailsInfosLineProps[] = [
    {
        label: "Alcoolémie",
        alias: "ABV",
        value: props.beer.abv,
        measurement: "%"
    },
    {
        label: "Acidité",
        alias: "PH",
        value: props.beer.ph
    },
    {
        label: "Amertume",
        alias: "IBU",
        value: props.beer.ibu
    },
    {
        label: "Couleur",
        alias: "EBC",
        value: props.beer.ebc
    }
]
</script>

<template>
    <div class="details">
        <AppStateManagement :loading="loading" :errorMessage="error" />
        <BeerDetailsInfosLine
            v-if="!loading && !error"
            v-for="info in infos"
            :label="info.label"
            :alias="info.alias"
            :value="info.value"
            :measurement="info.measurement"
        />
    </div>
</template>

<style scoped>
.details {
    display: flex;
    flex-direction: column;
}
</style>
