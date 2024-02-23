<script setup lang="ts">
import NavbarLink from "../atoms/NavbarLink.vue";
export interface TheNavbarLinksListProps {
    links: typeof NavbarLink[]
}

const props = defineProps<TheNavbarLinksListProps>()
</script>

<template>
    <div class="links">
        <NavbarLink v-for="link in links" :page="link.page" :label="link.label"/>
    </div>
</template>

<style scoped>
.links {
    width: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20%;
}
</style>
