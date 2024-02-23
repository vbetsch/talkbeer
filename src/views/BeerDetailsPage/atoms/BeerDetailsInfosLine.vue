<script setup lang="ts">
import {computed} from "vue";

export interface BeerDetailsInfosLineProps {
    label: string
    alias?: string
    value?: string | number
    measurement?: string
}

const props = defineProps<BeerDetailsInfosLineProps>()

const aliasBetweenParenthesis = computed(() => {
    if (props.alias) {
        return '(' + props.alias + ')'
    }
})
</script>

<template>
    <span>{{ label }} {{ aliasBetweenParenthesis }} : {{ value ?? "--" }}{{ measurement }}</span>
</template>

<style scoped>

</style>
