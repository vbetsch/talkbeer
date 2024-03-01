<script setup lang="ts">
export interface InfoProps {
    title: string;
    value: string;
}

defineProps<InfoProps>();
</script>

<template>
    <span class="info">
        {{ title }} <span class="value">{{ value }}</span>
    </span>
</template>

<style scoped>
.info {
    color: var(--grey);
}

.value {
    color: var(--black);
    font-weight: normal;
}
</style>
