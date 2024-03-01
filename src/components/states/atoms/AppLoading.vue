<script setup lang="ts">
export interface AppLoadingProps {
    loading: boolean;
}

defineProps<AppLoadingProps>();
</script>

<template>
    <span v-if="loading" class="text">Loading...</span>
</template>

<style scoped>
.text {
    color: var(--light-grey);
}
</style>
