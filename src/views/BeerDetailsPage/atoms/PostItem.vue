<script setup lang="ts">
import AppStarGroup from '../../../components/rates/molecules/AppStarGroup.vue';

export interface PostItemProps {
    content: string;
    starsNumber: number;
}

defineProps<PostItemProps>();
</script>

<template>
    <div class="post">
        <AppStarGroup :max-value="5" :value="starsNumber" />
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
</style>
