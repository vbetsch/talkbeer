<script setup lang="ts">
import AppProgressBar, {AppProgressBarProps} from "../molecules/AppProgressBar.vue";
import {computed, getCurrentInstance, onMounted, ref} from "vue";
import {checkProgressBar} from "../../ComponentErrorManager.ts";

export interface AppProgressBarWithCountersProps extends AppProgressBarProps {
}

const props = defineProps<AppProgressBarWithCountersProps>()

let errorComponent = ref("")

const checkComponent = () => {
    try {
        checkProgressBar(props.maxValue, props.progressValue, getCurrentInstance()?.type.__name)
    } catch (e: any) {
        errorComponent.value = e.message
        throw e
    }
}

const computedCounterStyle = computed(() => {
    return `color: ${props?.color ?? "green"};`
})

onMounted(checkComponent)
</script>

<template>
    <div v-if="!errorComponent" class="navbar-counters">
        <AppProgressBar
            :color="props.color"
            :max-value="props.maxValue"
            :width="props.width"
            :progressValue="props.progressValue"
        />
        <span class="counters">
            <span class="counter" :style="computedCounterStyle">
                {{ props.progressValue }}
            </span>/{{ props.maxValue }}
        </span>
    </div>
</template>

<style scoped>
.navbar-counters {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
}

.counters {
    font-size: 12px;
    color: var(--grey);
}

.counter {
    font-weight: 600;
    font-size: 14px;
}
</style>
