<script setup lang="ts">
import BeerItem from "../atoms/BeerItem.vue";
import {AxiosResponse} from "axios";
import {onMounted, reactive, ref} from "vue";
import AppStateManagement from "../../../components/states/molecules/AppStateManagement.vue";
import {getAllBeers} from "../../../queries/beersQueries.ts";

let beers = reactive<BeerType[]>([]);
let isLoading = ref<boolean>(false);
let errorMessage = ref<string>("");

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
    <AppStateManagement :loading="isLoading" :errorMessage="errorMessage"/>
    <div class="beers">
        <BeerItem :beer="beer" v-for="beer in beers"/>
    </div>
</template>

<style scoped>
.beers {
    display: grid;
    grid-template-columns: repeat(auto-fill, 10vw);
    row-gap: 5vh;
}

@media (max-width: 1100px) {
    .beers {
        grid-template-columns: repeat(auto-fill, 25vw);
    }
}
</style>
