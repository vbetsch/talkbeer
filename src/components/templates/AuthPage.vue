<script setup lang="ts">
import AppForm from '../../components/form/organisms/AppForm.vue';
import AppTitle from '../../components/titles/AppTitle.vue';
import { useAuthStore } from '../../stores/AuthStore.ts';
import { FieldTypeSupported } from '../../types/FieldTypeSupported.ts';
import { AuthCredentialsType } from '../../types/Auth.ts';
import { AppFieldProps } from '../form/molecules/AppField.vue';
import { AppSubLinkProps } from '../links/molecules/AppSubLink.vue';
import Card from './Card.vue';

const store = useAuthStore();

export interface AuthPageProps {
    title: string;
    sublink: AppSubLinkProps;
    textFormButton: string;
}

defineProps<AuthPageProps>();

const emit = defineEmits<{
    submitForm: [mapping: AuthCredentialsType];
}>();

const fields: AppFieldProps[] = [
    {
        type: FieldTypeSupported.EMAIL,
        keyName: 'email',
        label: 'Email',
        placeholder: 'Enter your email address',
        required: true,
    },
    {
        type: FieldTypeSupported.PASSWORD,
        keyName: 'password',
        label: 'Password',
        placeholder: 'Enter your password',
        required: true,
    },
];

const callbackSubmitValues = (mapping: AuthCredentialsType) => {
    emit('submitForm', mapping);
};
</script>

<template>
    <Card>
        <AppTitle :text="title" />
        <AppForm
            :fields="fields"
            :loading="store.isLoading"
            :error="store.errorMessage"
            :sublink="sublink"
            :text-button="textFormButton"
            @submit-values="callbackSubmitValues"
        />
    </Card>
</template>

<style scoped>
.title {
    padding: 0;
    justify-content: center;
}
</style>
