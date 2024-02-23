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

let errorComponent = ref("")

const checkComponent = () => {
    try {
        checkProgressBar(props.maxValue, props.progressValue, getCurrentInstance()?.type.__name)
    } catch (e: any) {
        errorComponent.value = e.message
        throw e
    }
}

const computedContainerStyle = computed(() => {
    return `width: ${props.width ?? 150}px;`
})

const computedContentStyle = computed(() => {
    const percents = 100 * props.progressValue / props.maxValue
    return `background-color: ${props.color ?? "green"}; width: ${percents}%;`
})

onMounted(checkComponent)
</script>

<template>
    <div v-if="!errorComponent" class="progressbar" :style="computedContainerStyle">
        <div class="container">
            <div class="progress" :style="computedContentStyle"></div>
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

.progress {
    content: '';
    border-radius: 15px;
}
</style>
