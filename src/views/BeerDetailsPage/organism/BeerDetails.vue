<script setup lang="ts">
import {router} from "../../../Router.ts";
import {getOneBeerByID} from "../../../queries/beersQueries.ts";
import {onMounted, reactive, ref} from "vue";
import BeerDetailsInfo from "../molecules/BeerDetailsInfo.vue";

let beer = reactive<BeerType>({} as BeerType);
let isLoading = ref<boolean>(false);
let errorMessage = ref<string>("");

const fetchData = async () => {
    isLoading.value = true;
    try {
        const beerId = router?.currentRoute?.value?.params?.beerId
        if (beerId) {
            const {data}: { data: BeerType[] } = await getOneBeerByID(beerId);
            if (data?.length) {
                beer = data[0];
            }
        }
    } catch (e: any) {
        errorMessage.value = 'Error fetching data:' + e.message
        console.error(errorMessage.value);
    } finally {
        isLoading.value = false;
    }
}
onMounted(fetchData);
</script>

<template>
    <div class="content">
        <img class="image" :src="beer.image_url" :alt="beer.name">
        <BeerDetailsInfo :beer="beer" :error="errorMessage" :loading="isLoading"/>
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
