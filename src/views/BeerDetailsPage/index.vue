<script setup lang="ts">
import {getOneBeerByID} from "../../queries/beersQueries.ts";
import {onMounted, reactive, ref, Ref} from "vue";
import {router} from "../../Router.ts";
import AppBeerItem from "../../components/beers/AppBeerItem.vue";

let beer: BeerType | {} = reactive({});
let isLoading: Ref<boolean> = ref(false);
let errorMessage: Ref<string> = ref("");

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
    <AppBeerItem v-if="!isLoading" :beer="beer"/>
</template>

<style scoped>

</style>
