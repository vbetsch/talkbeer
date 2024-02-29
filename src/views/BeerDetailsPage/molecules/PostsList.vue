<script setup lang="ts">
import PostItem, {PostItemProps} from "../atoms/PostItem.vue";

export interface PostsListProps {
    list: PostItemProps[]
}

const props = defineProps<PostsListProps>()
</script>

<template>
    <PostItem
        v-for="post in list"
        :content="post.content"
    />
</template>

<style scoped>

</style>
