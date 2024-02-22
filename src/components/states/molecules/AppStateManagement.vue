<script setup lang="ts">
import AppLoading from "../atoms/AppLoading.vue";
import AppErrorMessage from "../atoms/AppErrorMessage.vue";

defineProps<{
    loading?: boolean
    errorMessage?: string
}>()
</script>

<template>
    <AppLoading v-if="loading" :loading="true"/>
    <AppErrorMessage v-if="errorMessage" :error="errorMessage"/>
</template>

<style scoped>

</style>
