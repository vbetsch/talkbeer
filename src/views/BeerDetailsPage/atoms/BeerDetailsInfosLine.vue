<script setup lang="ts">
import {computed} from "vue";
import AppProgressBarWithCounters, {
    AppProgressBarWithCountersProps
} from "../../../components/progressbar/organisms/AppProgressBarWithCounters.vue";

export interface BeerDetailsInfosLineProps {
    label: string
    alias?: string
    value?: string | number
    measurement?: string
    progressBar?: AppProgressBarWithCountersProps
}

const props = defineProps<BeerDetailsInfosLineProps>()

const aliasBetweenParenthesis = computed(() => {
    if (props.alias) {
        return `(${props.alias})`
    }
})
</script>

<template>
    <div v-if="progressBar" class="content">
        <span>{{ label }} {{ aliasBetweenParenthesis }} : </span>
        <AppProgressBarWithCounters
            v-if="progressBar"
            :width="progressBar.width"
            :color="progressBar.color"
            :value="progressBar.value"
            :maxValue="progressBar.maxValue"
        />
    </div>
    <div v-else class="content">
        <span>{{ label }} {{ aliasBetweenParenthesis }} : {{ value ?? "--" }}{{ measurement }}</span>
    </div>
</template>

<style scoped>
.content {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;
}
</style>
