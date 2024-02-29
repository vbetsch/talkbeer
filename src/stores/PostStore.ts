import {defineStore} from "pinia";
import {reactive, ref} from "vue";
import {PostDocument} from "../types/Post.ts";
import {getPosts, getPostsByBeer} from "../data/queries/postsQueries.ts";

export const usePostStore = defineStore('posts', () => {
    let isLoading = ref<boolean>(false);
    let errorMessage = ref<string>("");
    let allPosts = reactive<PostDocument[]>([]);
    let currentPosts = reactive<PostDocument[]>([]);

    const fetchAllPosts = async () => {
        if (allPosts.length) {
            return
        }
        isLoading.value = true;
        try {
            const posts = await getPosts();
            Object.assign(allPosts, posts);
            errorMessage.value = ''
        } catch (e: any) {
            errorMessage.value = 'Error fetching data: ' + e.message
            console.error(errorMessage.value);
        } finally {
            isLoading.value = false;
        }
    }
    const fetchPostsByBeer = async (beerId: string) => {
        isLoading.value = true;
        try {
            const posts = await getPostsByBeer(parseInt(beerId));
            Object.assign(currentPosts, posts);
            errorMessage.value = ''
        } catch (e: any) {
            errorMessage.value = 'Error fetching data: ' + e.message
            console.error(errorMessage.value);
        } finally {
            isLoading.value = false;
        }
    }

    return {
        isLoading,
        errorMessage,
        allPosts,
        currentPosts,
        fetchAllPosts,
        fetchPostsByBeer
    }
})
