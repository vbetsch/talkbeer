<script setup lang="ts">
import {computed, getCurrentInstance, onMounted, ref} from "vue";
import {checkProgressBar} from "../../ComponentErrorManager.ts";

export interface AppProgressBarProps {
    width?: number,
    color?: string,
    progressValue: number,
    maxValue: number
}

const props = defineProps<AppProgressBarProps>()

let _width = ref(props.width ?? 150)
let errorComponent = ref("")

const checkComponent = () => {
    try {
        checkProgressBar(props.maxValue, props.progressValue, getCurrentInstance()?.type.__name)
    } catch (e: any) {
        errorComponent.value = e.message
        throw e
    }
}

const getWidth = (progressValue: number, maxValue: number) => 100 * progressValue / maxValue
const computedContainerStyle = computed(() => `width: ${_width.value}px;`)
const computedContentFixColorStyle = computed(() => `background-color: ${props.color}; width: ${getWidth(props.progressValue, props.maxValue)}%;`)
const computedContentGradientStyle = computed(() => `width: ${100 - getWidth(props.progressValue, props.maxValue)}%;`)

onMounted(checkComponent)
</script>

<template>
    <div v-if="!errorComponent" class="progressbar" :style="computedContainerStyle">
        <div v-if="color" class="container fix-color">
            <div class="progress" :style="computedContentFixColorStyle"></div>
        </div>
        <div v-else class="container gradient">
            <div class="progress-bar-child progress"></div>
            <div class="progress-bar-child shrinker" :style="computedContentGradientStyle"></div>
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
    height: 10px;
    width: 100%;
    border-radius: 15px;
    box-shadow: 0 0 2px rgb(131, 131, 131);
}

/* ------------- FIX COLOR ------------- */
.container.fix-color {
    display: flex;
    content: '';
}

.container.fix-color .progress {
    content: '';
    border-radius: 15px;
}

/* ------------- GRADIENT ------------- */

.container.gradient {
    position: relative;
    overflow: hidden;
}

.container.gradient .progress-bar-child {
    width: 100%;
    height: 100%;
}

.container.gradient .progress {
    background: linear-gradient(to right, #ffef3f 0%, #ffaa3a 50%, #e5405e 100%);
}

.container.gradient .shrinker {
    background-color: white;
    position: absolute;
    top: 0;
    right: 0;
}
</style>
