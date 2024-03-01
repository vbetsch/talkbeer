<script setup lang="ts">
import AppLink, { AppLinkProps } from '../atoms/AppLink.vue';

export interface AppSubLinkProps {
    beforeText: string;
    afterText: string;
    link: AppLinkProps;
}

defineProps<AppSubLinkProps>();
</script>

<template>
    <span class="sublink">
        {{ beforeText }} <AppLink :page="link.page" :label="link.label" /> {{ afterText }}
    </span>
</template>

<style scoped>
.sublink {
    display: flex;
    gap: 5px;
    color: var(--grey);
}

.sublink .link {
    color: blue;
}
</style>
