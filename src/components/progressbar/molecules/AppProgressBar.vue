<script setup lang="ts">
import {computed} from "vue";

export interface AppProgressBarProps {
    width?: number,
    color?: string,
    value: number,
    maxValue: number
}

const props = defineProps<AppProgressBarProps>()

const computedContainerStyle = computed(() => {
    return `width: ${props.width ?? 150}px;`
})

const computedContentStyle = computed(() => {
    const percents = 100 * props.value / props.maxValue
    return `background-color: ${props.color ?? "green"}; width: ${percents}%;`
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
    height: 10px;
    width: 100%;
    content: '';
    border-radius: 15px;
    box-shadow: 0 0 2px rgb(131, 131, 131);

}

.content {
    content: '';
    border-radius: 15px;
}
</style>
