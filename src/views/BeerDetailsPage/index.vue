<script setup lang="ts">
import {onMounted} from "vue";
import {router} from "../../Router.ts";
import BeerDetails from "./organisms/BeerDetails.vue";
import {useBeerStore} from "../../stores/BeerStore.ts";
import {storeToRefs} from "pinia";
import AppStateManagement from "../../components/states/molecules/AppStateManagement.vue";
import {usePostStore} from "../../stores/PostStore.ts";

const beerStore = useBeerStore()
const {currentBeer, favoriteIdBeers} = storeToRefs(beerStore)

const postStore = usePostStore()

const beerId = router?.currentRoute?.value?.params?.beerId as string

onMounted(() => {
    beerStore.setCurrentBeerFromData(beerId)
    postStore.fetchPostsByBeer(beerId)
    beerStore.fetchLocalFavorites()
})

const callbackAddBeerToFavorites = () => beerStore.addBeerToFavorites(currentBeer.value.id)
const callbackRemoveBeerToFavorites = () => beerStore.removeBeerToFavorites(currentBeer.value.id)
</script>

<template>
    <AppStateManagement :loading="beerStore.isLoading" :errorMessage="beerStore.errorMessage"/>
    <div v-if="!beerStore.isLoading && !beerStore.errorMessage" class="content">
        <img class="image" :src="currentBeer.image_url" :alt="currentBeer.name">
        <BeerDetails
            :favorites="favoriteIdBeers"
            :beer="currentBeer"
            :error="beerStore.errorMessage"
            :loading="beerStore.isLoading"
            @addBeerToFavorites="callbackAddBeerToFavorites"
            @removeBeerToFavorites="callbackRemoveBeerToFavorites"
        />
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
