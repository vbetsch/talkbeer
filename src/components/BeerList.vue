<script setup lang="ts">
import {ref, onMounted, reactive, Ref} from 'vue';
import {getAllBeers} from "../queries/beersQueries.ts";
import {AxiosResponse} from "axios";

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
    <p v-if="isLoading">Loading...</p>
    <p class="error" v-else-if="error">{{ error }}</p>
    <div v-else v-for="beer in beers">
        <p>ID : {{ beer.id }}</p>
        <p>Name : {{ beer.name }}</p>
    </div>
</template>

<style scoped>

</style>
