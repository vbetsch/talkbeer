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
    <div v-else v-for="beer in beers">
        <Beer :beer="beer"/>
    </div>
</template>

<style scoped>

</style>
