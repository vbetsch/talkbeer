<script setup lang="ts">
import {ref} from "vue";

export interface NavbarLinkProps {
    page: string
    label?: string
}

const props = defineProps<NavbarLinkProps>()
const _label = ref<string>(props.label ?? props.page)
</script>

<template>
    <router-link class="link" :to="{ name: page }">
        <span class="text">{{ _label }}</span>
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
