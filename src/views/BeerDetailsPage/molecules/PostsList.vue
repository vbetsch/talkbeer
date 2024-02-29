<script setup lang="ts">
import PostItem from "../atoms/PostItem.vue";
import {PostDocument} from "../../../types/Post.ts";

export interface PostsListProps {
    list: PostDocument[]
}

defineProps<PostsListProps>()
</script>

<template>
    <PostItem
        v-for="post in list"
        :content="post.content"
        :starsNumber="post.stars"
    />
</template>

<style scoped>

</style>
