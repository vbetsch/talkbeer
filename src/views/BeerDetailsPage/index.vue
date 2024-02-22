<script setup lang="ts">
import {AxiosResponse} from "axios";
import {getOneBeerByID} from "../../queries/beersQueries.ts";
import {onMounted, reactive, ref, Ref} from "vue";
import {router} from "../../Router.ts";
import AppBeerItem from "../../components/beers/AppBeerItem.vue";

let beers: BeerType[] = reactive([]);
let isLoading: Ref<boolean> = ref(false);
let errorMessage: Ref<string> = ref("");

const fetchData = async () => {
    isLoading.value = true;
    try {
        const beerId = router?.currentRoute?.value?.params?.beerId
        if (beerId) {
            const response: AxiosResponse<BeerType[], any> = await getOneBeerByID(beerId);
            beers = response.data;
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
    <AppBeerItem :beer="beers[0]" :loading="isLoading" :error="errorMessage"/>
</template>

<style scoped>

</style>
