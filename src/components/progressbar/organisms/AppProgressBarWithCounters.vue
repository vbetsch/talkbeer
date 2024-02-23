<script setup lang="ts">
import AppProgressBar, {AppProgressBarProps} from "../molecules/AppProgressBar.vue";
import {computed} from "vue";

export interface AppProgressBarWithCountersProps extends AppProgressBarProps {
}

const props = defineProps<AppProgressBarWithCountersProps>()

const computedCounterStyle = computed(() => {
    return `color: ${props?.color ?? "green"};`
})
</script>

<template>
    <div class="navbar-counters">
        <AppProgressBar
            :color="props.color"
            :max-value="props.maxValue"
            :width="props.width"
            :value="props.value"
        />
        <span class="counters">
            <span class="counter" :style="computedCounterStyle">
                {{ props.value }}
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
