<script setup lang="ts">
import AppTitle from "../../components/titles/AppTitle.vue";
import AppForm from "../../components/form/organisms/AppForm.vue";
import {AppFieldProps} from "../../components/form/molecules/AppField.vue";
import {FieldTypeSupported} from "../../types/FieldTypeSupported.ts";
import {AuthCredentialsType} from "../../types/Auth.ts";
import {useAuthStore} from "../../stores/AuthStore.ts";
import {router} from "../../Router.ts";
import AppLink from "../../components/links/atoms/AppLink.vue";
import AppSubLink from "../../components/links/molecules/AppSubLink.vue";

const store = useAuthStore();

const fields: AppFieldProps[] = [
    {
        type: FieldTypeSupported.EMAIL,
        keyName: "email",
        label: "Email",
        placeholder: "Enter your email address",
        required: true
    },
    {
        type: FieldTypeSupported.PASSWORD,
        keyName: "password",
        label: "Password",
        placeholder: "Enter your password",
        required: true
    }
]

const callbackSubmitValues = async (mapping: AuthCredentialsType) => {
    const result = await store.signInUser(mapping)
    if (result) {
        await router.push("profile")
    }
}
</script>


<template>
    <div class="card-container">
        <div class="card-content">
            <AppTitle text="Login"/>
            <AppForm
                :fields="fields"
                :loading="store.isLoading"
                :error="store.errorMessage"
                @submitValues="callbackSubmitValues"
            />
            <AppSubLink before-text="Don't have an account yet? Go to the" after-text="page" :link="{
                page: 'Register',
                label: 'register'
            }"/>
        </div>
    </div>
</template>

<style scoped>
.card-container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-content {
    width: fit-content;
    box-shadow: 0 0 10px 2px #ffcb89;
    border-radius: 15px;
    padding: 25px 10px;
}

.title {
    padding: 0 7vw 2vh 7vw;
}

.sublink {
    display: flex;
    gap: 5px;
    color: var(--grey);
}
.sublink .link {
    color: blue;
}
</style>
