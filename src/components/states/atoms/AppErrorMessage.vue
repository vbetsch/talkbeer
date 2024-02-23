<script setup lang="ts">
export interface AppErrorMessageProps {
    error: string
}

const props = defineProps<AppErrorMessageProps>()
</script>

<template>
    <span v-if="error" class="text">{{ error }}</span>
</template>

<style scoped>
.text {
    color: red;
}
</style>
