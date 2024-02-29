<script setup lang="ts">
import AppLoading from "../atoms/AppLoading.vue";
import AppErrorMessage from "../atoms/AppErrorMessage.vue";

export interface AppStateManagementProps {
    loading: boolean
    errorMessage?: string
}

defineProps<AppStateManagementProps>()
</script>

<template>
    <AppLoading v-if="loading" :loading="true"/>
    <AppErrorMessage v-else-if="errorMessage" :error="errorMessage"/>
</template>

<style scoped>

</style>
