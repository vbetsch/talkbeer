<script setup lang="ts">
defineProps<{
    loading?: boolean
    errorMessage?: string
}>()
</script>

<template>
    <Loading v-if="loading" :loading="true"/>
    <ErrorMessage v-else-if="errorMessage" :error="errorMessage"/>
</template>

<style scoped>

</style>
