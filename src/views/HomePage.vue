<script setup lang="ts">
import {ref, onMounted, reactive, Ref} from 'vue';
import {getAllBeers} from "../queries/beersQueries.ts";
import {AxiosResponse} from "axios";
import BeerList from "../components/BeerList.vue";

let beers: BeerType[] = reactive([]);
let isLoading: Ref<boolean> = ref(false);
let error: Ref<string> = ref("");

const fetchData = async () => {
    isLoading.value = true;
    try {
        const response: AxiosResponse<BeerType[], any> = await getAllBeers();
        beers = response.data;
    } catch (e: any) {
        error.value = 'Error fetching data:' + e.message
        console.error(error.value);
    } finally {
        isLoading.value = false;
    }
}

onMounted(fetchData);
</script>

<template>
    <h1>TalkBeer</h1>
    <BeerList :beers="beers" :loading="isLoading" :error="error" />
</template>

<style scoped>

</style>
