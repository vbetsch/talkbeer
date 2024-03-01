import { defineStore } from 'pinia';
import { ref } from 'vue';
import { createUser, signIn } from '../data/queries/authQueries.ts';
import { AuthCredentialsType } from '../types/Auth.ts';
import { auth } from '../data/firebase.ts';

export const useAuthStore = defineStore('auth', () => {
    let isLoading = ref<boolean>(false);
    let errorMessage = ref<string>('');

    // ======================================= AUTHENTICATION =======================================
    const signInUser = async (data: AuthCredentialsType) => {
        isLoading.value = true;
        try {
            const { user, error } = await signIn(data);
            if (error) {
                errorMessage.value = error;
                return;
            }
            errorMessage.value = '';
            return user;
        } catch (e: any) {
            errorMessage.value = 'Error authentication : ' + e.message;
            console.error(errorMessage.value);
        } finally {
            isLoading.value = false;
        }
    };
    const registerUser = async (data: AuthCredentialsType) => {
        isLoading.value = true;
        try {
            const { user, error } = await createUser(data);
            if (error) {
                errorMessage.value = error;
                return;
            }
            errorMessage.value = '';
            return user;
        } catch (e: any) {
            errorMessage.value = 'Error authentication : ' + e.message;
            console.error(errorMessage.value);
        } finally {
            isLoading.value = false;
        }
    };
    const logOutUser = async () => {
        isLoading.value = true;
        try {
            await auth.signOut();
        } catch (e: any) {
            errorMessage.value = 'Error authentication : ' + e.message;
            console.error(errorMessage.value);
        } finally {
            isLoading.value = false;
        }
    };

    return {
        isLoading,
        errorMessage,
        signInUser,
        registerUser,
        logOutUser,
    };
});
