<script setup lang="ts">
import PostItem from '../atoms/PostItem.vue';
import { PostDocument } from '../../../types/Post.ts';
import AppSubTitle from '../../../components/titles/AppSubTitle.vue';

export interface PostsListProps {
    list: PostDocument[];
}

defineProps<PostsListProps>();
</script>

<template>
    <AppSubTitle v-if="list.length" text="Avis" />
    <PostItem
        v-for="post in list"
        :key="post.id"
        :content="post.content"
        :stars-number="post.stars"
    />
</template>

<style scoped></style>
