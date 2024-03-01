<script setup lang="ts">
import AppProgressBar, { AppProgressBarProps } from '../molecules/AppProgressBar.vue';
import { getCurrentInstance, onMounted, ref } from 'vue';
import { checkMaxValue, checkNullValue } from '../../ComponentErrorManager.ts';

export interface AppProgressBarWithCountersProps extends AppProgressBarProps {}

const props = defineProps<AppProgressBarWithCountersProps>();

let errorComponent = ref('');

const checkComponent = () => {
    try {
        const componentName = getCurrentInstance()?.type.__name;
        checkNullValue(props.maxValue, componentName);
        checkMaxValue(props.maxValue, props.progressValue, componentName);
    } catch (e: any) {
        errorComponent.value = e.message;
        throw e;
    }
};

onMounted(checkComponent);
</script>

<template>
    <div v-if="!errorComponent" class="navbar-counters">
        <AppProgressBar
            :color="color"
            :max-value="maxValue"
            :width="width"
            :progress-value="progressValue"
        />
        <span class="counters">
            <span class="counter"> {{ progressValue }} </span>/{{ maxValue }}
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
