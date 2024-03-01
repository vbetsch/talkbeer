import { addDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { auth, DatabaseCollectionEnum, db } from '../firebase.ts';
import {
    CreatePostDataDto,
    CreatePostDto,
    InitialPostData,
    PostDocument,
} from '../../types/Post.ts';

export const getPosts = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, DatabaseCollectionEnum.POSTS));
        const posts: PostDocument[] = [];
        querySnapshot.forEach((doc) => {
            posts.push({ id: doc.id, ...doc.data() } as PostDocument);
        });
        return posts;
    } catch (e) {
        console.error(e);
    }
};

export const getPostsByBeer = async (beerId: number) => {
    try {
        const querySnapshot = await getDocs(
            query(collection(db, DatabaseCollectionEnum.POSTS), where('beerId', '==', beerId)),
        );
        const posts: PostDocument[] = [];
        querySnapshot.forEach((doc) => {
            posts.push({ id: doc.id, ...doc.data() } as PostDocument);
        });
        return posts;
    } catch (e) {
        console.error(e);
    }
};

export const createPost = async (data: CreatePostDataDto) => {
    if (!auth.currentUser) {
        return;
    }
    try {
        const initialPostData: InitialPostData = {
            likes: 0,
            authorId: auth.currentUser.uid,
        };
        const newPost: CreatePostDto = {
            ...initialPostData,
            ...data,
        };
        return await addDoc(collection(db, DatabaseCollectionEnum.POSTS), newPost);
    } catch (e) {
        console.error(e);
    }
};
