<script setup lang="ts">
defineProps<{
    beer: BeerType
}>()
</script>

<template>
    <span>ID : {{ beer.id }}</span>
    <span>Name : {{ beer.name }}</span>
    <img :src="beer.image_url" :alt="beer.name + ' image'">
</template>

<style scoped>

</style>
