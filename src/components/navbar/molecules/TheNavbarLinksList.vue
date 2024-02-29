<script setup lang="ts">
import NavbarLink, {NavbarLinkProps} from "../atoms/NavbarLink.vue";

export interface TheNavbarLinksListProps {
    links: NavbarLinkProps[]
}

const props = defineProps<TheNavbarLinksListProps>()
</script>

<template>
    <div class="links">
        <NavbarLink
            v-for="link in links"
            :page="link.page"
            :label="link.label"
        />
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
