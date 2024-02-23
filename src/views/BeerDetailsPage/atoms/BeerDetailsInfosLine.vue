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
    <div class="infos-line">
        <span>{{ label }} <i>{{ aliasBetweenParenthesis }}</i> : </span>
        <AppProgressBarWithCounters
            v-if="progressBar"
            :width="progressBar.width"
            :color="progressBar.color"
            :value="progressBar.value"
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
    font-size: 15px;
}
</style>
