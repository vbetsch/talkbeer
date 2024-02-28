<script setup lang="ts">
export interface AppTitleProps {
    text: string
}

const props = defineProps<AppTitleProps>()
</script>

<template>
    <div class="title">
        <h1 class="text">{{ text }}</h1>
    </div>
</template>

<style scoped>
.title {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0 7vw 5vh 7vw;
}

.title .text {
    font-weight: normal;
    font-size: 3em;
}
</style>
