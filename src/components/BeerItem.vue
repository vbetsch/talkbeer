<script setup lang="ts">
defineProps<{
    beer: BeerType
}>()
</script>

<template>
    <span class="text"><b>{{ beer.name }}</b></span>
    <img class="image" :src="beer.image_url" :alt="beer.name + ' image'">
</template>

<style scoped>
.image {
    width: 50px;
}
</style>
