<script setup lang="ts">
export interface AppErrorMessageProps {
    error: string
}

const props = defineProps<AppErrorMessageProps>()
</script>

<template>
    <span v-if="error" class="error">{{ error }}</span>
</template>

<style scoped>
</style>
