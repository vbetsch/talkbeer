<script setup lang="ts">
export interface AppLinkProps {
    page: string;
    label?: string;
}

const props = defineProps<AppLinkProps>();
</script>

<template>
    <router-link class="link" :to="{ name: page }">
        <span class="text">{{ props.label ?? props.page }}</span>
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
