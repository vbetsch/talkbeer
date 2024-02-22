<script setup lang="ts">
import {ref, onMounted} from 'vue';
import {getAllBeers} from "../queries/beersQueries.ts";

const beers = ref([]);
const isLoading = ref(false);
const error = ref("");

async function fetchData() {
    isLoading.value = true;
    try {
        const response = await getAllBeers();
        beers.value = response.data;
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
