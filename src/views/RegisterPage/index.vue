<script setup lang="ts">
import { useAuthStore } from '../../stores/AuthStore.ts';
import { AuthCredentialsType } from '../../types/Auth.ts';
import { router } from '../../Router.ts';
import AuthPage from '../../components/templates/AuthPage.vue';

const store = useAuthStore();

const callbackSubmitValues = async (mapping: AuthCredentialsType) => {
    const result = await store.registerUser(mapping);
    if (result) {
        await router.push('login');
    }
};
</script>

<template>
    <AuthPage
        title="Register"
        text-form-button="Register"
        :sublink="{
            beforeText: 'Already have an account? Go to the',
            afterText: 'page',
            link: {
                page: 'Login',
                label: 'login',
            },
        }"
        @submit-form="callbackSubmitValues"
    />
</template>

<style scoped></style>
