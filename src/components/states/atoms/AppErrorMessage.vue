<script setup lang="ts">
defineProps<{
    error: string
}>()
</script>

<template>
    <span v-if="error" class="text">{{ error }}</span>
</template>

<style scoped>
.text {
    color: red;
}
</style>
