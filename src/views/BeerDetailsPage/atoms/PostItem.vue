<script setup lang="ts">
export interface PostItemProps {
    content: string;
}

const props = defineProps<PostItemProps>()
</script>

<template>
<p>{{ content}}</p>
</template>

<style scoped>

</style>
