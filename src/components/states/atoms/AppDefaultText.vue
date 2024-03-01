<script setup lang="ts">
export interface AppDefaultTextProps {
    text?: string;
}

defineProps<AppDefaultTextProps>();
</script>

<template>
    <span v-if="text" class="default-text">{{ text }}</span>
</template>

<style scoped>
.default-text {
    color: var(--grey);
}
</style>
