<script setup lang="ts">
import { AuthCredentialsType } from '../../types/Auth.ts';
import { useAuthStore } from '../../stores/AuthStore.ts';
import { router } from '../../Router.ts';
import AuthPage from '../../components/templates/AuthPage.vue';

const store = useAuthStore();

const callbackSubmitValues = async (mapping: AuthCredentialsType) => {
    const result = await store.signInUser(mapping);
    if (result) {
        await router.push('profile');
    }
};
</script>

<template>
    <AuthPage
        title="Login"
        text-form-button="Login"
        :sublink="{
            beforeText: 'Don\'t have an account yet? Go to the',
            afterText: 'page',
            link: {
                page: 'Register',
                label: 'register',
            },
        }"
        @submit-form="callbackSubmitValues"
    />
</template>

<style scoped></style>
