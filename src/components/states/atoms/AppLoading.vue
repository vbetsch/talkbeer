<script setup lang="ts">
defineProps<{
    loading: boolean
}>()
</script>

<template>
    <span v-if="loading" class="text">Loading...</span>
</template>

<style scoped>
.text {
    color: var(--light-grey);
}
</style>
