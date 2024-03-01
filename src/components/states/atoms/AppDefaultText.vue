<script setup lang="ts">
export interface AppDefaultTextProps {
    text?: string;
}

defineProps<AppDefaultTextProps>();
</script>

<template>
    <span class="default-text" v-if="text">{{ text }}</span>
</template>

<style scoped>
.default-text {
    color: var(--grey);
}
</style>
