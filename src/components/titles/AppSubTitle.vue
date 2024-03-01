<script setup lang="ts">
export interface AppSubTitleProps {
    text: string;
}

defineProps<AppSubTitleProps>();
</script>

<template>
    <h4 class="subtitle">{{ text }}</h4>
</template>

<style scoped>
.subtitle {
    text-transform: uppercase;
    font-weight: normal;
    color: var(--grey);
    font-size: 14px;
}
</style>
