<script setup lang="ts">
defineProps<{
    beer: BeerType
}>()
</script>

<template>
    <div class="beer">
        <img class="image" :src="beer.image_url" :alt="beer.name + ' image'">
        <span class="text">{{ beer.name }}</span>
    </div>
</template>

<style scoped>
.beer {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    gap: 20px;
}

.image {
    width: 50px;
    align-self: center;
}

.text {
    max-height: 20px;
}
</style>
