<script setup lang="ts">
import {computed} from "vue";
import AppProgressBarWithCounters from "../../../components/progressbar/organisms/AppProgressBarWithCounters.vue";

export interface BeerDetailsInfosLineProgressBar {
    width?: number,
    color?: string,
    maxValue: number
}

export interface BeerDetailsInfosLineProps {
    label: string
    alias?: string
    value?: string | number
    measurement?: string
    progressBar?: BeerDetailsInfosLineProgressBar
}

const props = defineProps<BeerDetailsInfosLineProps>()

const aliasBetweenParenthesis = computed(() => props.alias && `(${props.alias})`)
</script>

<template>
    <div class="infos-line">
        <span>{{ label }} {{ aliasBetweenParenthesis }} : </span>
        <AppProgressBarWithCounters
            v-if="progressBar"
            :width="progressBar.width"
            :color="progressBar.color"
            :progressValue="value"
            :maxValue="progressBar.maxValue"
        />
        <div v-else>
            <span class="value">{{ value ?? "--" }}{{ measurement }}</span>
        </div>
    </div>
</template>

<style scoped>
.infos-line {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 5px;
}

.value {
    font-weight: 500;
    font-size: 16px;
}
</style>
