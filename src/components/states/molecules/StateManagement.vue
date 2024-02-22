<script setup lang="ts">
defineProps<{
    loading: boolean
    errorMessage: string
}>()
</script>

<template>
    <Loading :loading="loading"/>
    <ErrorMessage :error="errorMessage"/>
</template>

<style scoped>

</style>
