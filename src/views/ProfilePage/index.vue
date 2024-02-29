<script setup lang="ts">
import {auth} from "../../data/firebase.ts";
import AppTitle from "../../components/titles/AppTitle.vue";
import AppButton from "../../components/buttons/AppButton.vue";
import {useAuthStore} from "../../stores/AuthStore.ts";
import {router} from "../../Router.ts";

const store = useAuthStore();
const callbackDoAction = async () => {
    try {
        await store.logOutUser()
        await router.push("login")
    } catch (e) {
        console.error(e);
    }
}
</script>

<template>
    <AppTitle text="Profile"/>
    <div v-if="auth.currentUser">
        <p>Email : {{ auth.currentUser.email }}</p>
        <p>Creation Time : {{ auth.currentUser.metadata.creationTime }}</p>
        <p>Last sign in time : {{ auth.currentUser.metadata.lastSignInTime }}</p>
        <AppButton label="Log out" @doAction="callbackDoAction"/>
    </div>
</template>

<style scoped>

</style>
