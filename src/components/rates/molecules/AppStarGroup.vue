<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';
import { getCurrentInstance, onMounted, ref } from 'vue';
import { checkMaxValue } from '../../ComponentErrorManager.ts';

export interface AppStarGroupProps {
    value: number;
    maxValue: number;
}

const props = defineProps<AppStarGroupProps>();

let errorComponent = ref('');

const checkComponent = () => {
    try {
        checkMaxValue(props.maxValue, props.value, getCurrentInstance()?.type.__name);
    } catch (e: any) {
        errorComponent.value = e.message;
        throw e;
    }
};

onMounted(checkComponent);
</script>

<template>
    <div class="stars">
        <FontAwesomeIcon v-for="star in value" :key="star" class="star" :icon="faSolidStar" />
        <FontAwesomeIcon
            v-for="star in maxValue - value"
            :key="star"
            class="icon"
            :icon="faRegularStar"
        />
    </div>
</template>

<style scoped>
.stars {
    display: flex;
    color: var(--light-grey);
    justify-content: center;
    align-items: center;
    gap: 2px;
}

.star {
    color: var(--yellow);
}
</style>
