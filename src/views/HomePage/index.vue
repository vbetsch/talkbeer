<script setup lang="ts">
import {ref, onMounted, reactive, Ref} from 'vue';
import {AxiosResponse} from "axios";
import {getAllBeers} from "../../queries/beersQueries.ts";
import AppBeerList from "../../components/beers/AppBeerList.vue";

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
    <div class="content">
        <AppBeerList :beers="beers" :loading="isLoading" :error="error"/>
    </div>
</template>

<style scoped>
.content {
    padding: 2% 8vw;
}
</style>
