<script setup lang="ts">
import NavbarLink, { AppLinkProps } from '../atoms/AppLink.vue';

export interface AppLinksListProps {
    links: AppLinkProps[];
}

defineProps<AppLinksListProps>();
</script>

<template>
    <div class="links">
        <NavbarLink v-for="(link, key) in links" :key="key" :page="link.page" :label="link.label" />
    </div>
</template>

<style scoped>
.links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4vw;
}
</style>
