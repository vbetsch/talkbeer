<script setup lang="ts">
import {onMounted} from "vue";
import {router} from "../../Router.ts";
import BeerDetails from "./organisms/BeerDetails.vue";
import {useBeerStore} from "../../stores/BeerStore.ts";
import {storeToRefs} from "pinia";

const store = useBeerStore()
const {currentBeer} = storeToRefs(store)

const beerId = router?.currentRoute?.value?.params?.beerId as string

onMounted(() => store.setCurrentBeerFromData(beerId))
</script>

<template>
    <div class="content">
        <img class="image" :src="currentBeer.image_url" :alt="currentBeer.name">
        <BeerDetails :beer="currentBeer" :error="store.errorMessage" :loading="store.isLoading"/>
    </div>
</template>

<style scoped>
.content {
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 10%;
}

.image {
    height: 80vh;
}
</style>
