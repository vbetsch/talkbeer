<script setup lang="ts">
import {ref, onMounted, reactive, Ref} from 'vue';
import {AxiosResponse} from "axios";
import {getAllBeers} from "../../queries/beersQueries.ts";
import AppBeerList from "../../components/beers/AppBeerList.vue";

let beers: BeerType[] = reactive([]);
let isLoading: Ref<boolean> = ref(false);
let errorMessage: Ref<string> = ref("");

const fetchData = async () => {
    isLoading.value = true;
    try {
        const response: AxiosResponse<BeerType[], any> = await getAllBeers();
        beers = response.data;
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
    <AppBeerList :beers="beers" :loading="isLoading" :error="errorMessage"/>
</template>

<style scoped>

</style>
