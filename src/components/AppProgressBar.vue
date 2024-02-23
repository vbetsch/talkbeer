<script setup lang="ts">
import {computed} from "vue";

export interface AppProgressBarProps {
    width: number,
    color: string,
    value: number,
    maxValue: number
}

const props = defineProps<AppProgressBarProps>()

const computedContainerStyle = computed(() => {
    return `width: ${props.width}px;`
})
const computedContentStyle = computed(() => {
    const percents = 100 * props.value / props.maxValue
    return `background-color: ${props.color}; width: ${percents}%;`
})
</script>

<template>
    <div class="progressbar" :style="computedContainerStyle">
        <div class="container">
            <div class="content" :style="computedContentStyle"></div>
        </div>
    </div>
</template>

<style scoped>
.progressbar {
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    display: flex;
    height: 15px;
    width: 100%;
    content: '';
    border: 1px solid var(--light-grey);
    border-radius: 15px;
}

.content {
    content: '';
    border-radius: 15px;
}
</style>
