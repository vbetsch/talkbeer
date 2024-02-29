<script setup lang="ts">
import AppTitle from "../../components/titles/AppTitle.vue";
import AppForm from "../../components/form/organisms/AppForm.vue";
import {AppFieldProps} from "../../components/form/molecules/AppField.vue";
import {FieldTypeSupported} from "../../types/FieldTypeSupported.ts";
import {AuthCredentialsType} from "../../types/Auth.ts";
import AppStateManagement from "../../components/states/molecules/AppStateManagement.vue";
import {useAuthStore} from "../../stores/AuthStore.ts";
import {router} from "../../Router.ts";

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
    try {
        await store.signInUser(mapping)
        await router.push("profile")
    } catch (e) {
        console.error(e);
    }
}
</script>


<template>
    <div class="card-container">
        <div class="card-content">
            <AppTitle text="Login"/>
            <AppForm :fields="fields" @submitValues="callbackSubmitValues"/>
            <AppStateManagement :loading="store.isLoading" :error-message="store.errorMessage"/>
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
</style>
