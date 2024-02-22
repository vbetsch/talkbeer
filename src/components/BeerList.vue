<script setup lang="ts">
import Beer from "./BeerItem.vue";

defineProps<{
    beers: BeerType[]
    loading: boolean
    error: string
}>()
</script>

<template>
    <p v-if="loading" class="loading">Loading...</p>
    <p v-else-if="error" class="error">{{ error }}</p>
    <div v-else class="beers">
        <div class="beer" v-for="beer in beers">
            <Beer :beer="beer"/>
        </div>
    </div>
</template>

<style scoped>
.beers {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    row-gap: 100px;
}

.beer {
    display: flex;
    flex-direction: column;
    width: 10vw;
    justify-content: space-between;
    align-items: center;
}
</style>
