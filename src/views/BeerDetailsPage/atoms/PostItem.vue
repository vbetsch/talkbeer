<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';

export interface PostItemProps {
    content: string;
    starsNumber: number;
}

const props = defineProps<PostItemProps>();
</script>

<template>
    <div class="post">
        <div class="stars">
            <FontAwesomeIcon v-for="star in starsNumber" class="star" :icon="faSolidStar" />
            <FontAwesomeIcon v-for="star in 5 - starsNumber" class="icon" :icon="faRegularStar" />
        </div>
        <span>{{ content }}</span>
    </div>
</template>

<style scoped>
.post {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 15px;
}

.stars {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
}

.star {
    color: var(--yellow);
}
</style>
