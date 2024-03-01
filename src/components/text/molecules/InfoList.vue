<script setup lang="ts">
import Info, { InfoProps } from '../atoms/Info.vue';

export interface InfoListProps {
    list: InfoProps[];
}

defineProps<InfoListProps>();
</script>

<template>
    <Info v-for="(info, key) in list" :key="key" :title="info.title" :value="info.value" />
</template>

<style scoped></style>
