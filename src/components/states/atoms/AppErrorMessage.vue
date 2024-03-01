<script setup lang="ts">
export interface AppErrorMessageProps {
    error: string;
}

defineProps<AppErrorMessageProps>();
</script>

<template>
    <span v-if="error" class="error">{{ error }}</span>
</template>

<style scoped></style>
