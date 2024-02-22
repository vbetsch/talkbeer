<script setup lang="ts">
defineProps<{
    page: string
    label?: string
}>()
</script>

<template>
    <router-link class="link" :to="{ name: page }">
        <span class="text">{{ label ?? page }}</span>
    </router-link>
</template>

<style scoped>
.link {
    display: flex;
    text-decoration: none;
    color: var(--black);
}

.link:hover {
    text-decoration: underline;
}
</style>
