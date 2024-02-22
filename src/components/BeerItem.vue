<script setup lang="ts">
defineProps<{
    beer: BeerType
}>()
</script>

<template>
    <span>ID : {{ beer.id }}</span>
    <span>Name : {{ beer.name }}</span>
</template>

<style scoped>

</style>
