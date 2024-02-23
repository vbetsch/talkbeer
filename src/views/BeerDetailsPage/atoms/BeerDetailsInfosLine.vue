<script setup lang="ts">
import {computed} from "vue";
import AppProgressBar, {AppProgressBarProps} from "../../../components/AppProgressBar.vue";

export interface BeerDetailsInfosLineProps {
    label: string
    alias?: string
    value?: string | number
    measurement?: string
    progressBar?: AppProgressBarProps
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
        <AppProgressBar
            v-if="progressBar"
            :color="progressBar.color"
            :max-value="progressBar.maxValue"
            :width="progressBar.width"
            :value="progressBar.value"
        />
        <span>{{ progressBar.value }}/{{ progressBar.maxValue }}</span>
    </div>
    <div v-else class="content">
        <span>{{ label }} {{ aliasBetweenParenthesis }} : {{ value ?? "--" }}{{ measurement }}</span>
    </div>
</template>

<style scoped>
.content {
    display: flex;
    gap: 10px;
}
</style>
