<script setup lang="ts">
import AppSubTitle from "../../../components/titles/AppSubTitle.vue";

export interface BeerDetailsSectionProps {
    subtitle: string
}

defineProps<BeerDetailsSectionProps>()

</script>

<template>
    <section class="section">
        <AppSubTitle :text="subtitle"/>
        <span class="section-content">
            <slot></slot>
        </span>
    </section>
</template>

<style scoped>
.section {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
}

.section-content {
    font-size: 1.2em;
    text-justify: auto;
    border-left: 1px solid var(--light-grey);
    padding-left: 20px;
}
</style>
