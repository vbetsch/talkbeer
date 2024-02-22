<script setup lang="ts">
import {getOneBeerByID} from "../../queries/beersQueries.ts";
import {onMounted, reactive, ref} from "vue";
import {router} from "../../Router.ts";
import AppStateManagement from "../../components/states/molecules/AppStateManagement.vue";

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
    <div class="infos">
        <AppStateManagement :loading="isLoading" :errorMessage="errorMessage"/>
        <p>Name : {{ beer.name }}</p>
        <img :src="beer.image_url" :alt="beer.name">
    </div>
</template>

<style scoped>

</style>
