<script setup lang="ts">
import { auth } from '../../data/firebase.ts';
import AppTitle from '../../components/titles/AppTitle.vue';
import AppButton from '../../components/buttons/AppButton.vue';
import { useAuthStore } from '../../stores/AuthStore.ts';
import { router } from '../../Router.ts';
import AppLink from '../../components/links/atoms/AppLink.vue';
import InfoList from '../../components/text/molecules/InfoList.vue';

const store = useAuthStore();
const callbackDoAction = async () => {
    store
        .logOutUser()
        .then(() => {
            router.push('login').catch(e => console.error(e));
        })
        .catch(e => {
            console.error(e);
        });
};
</script>

<template>
    <AppTitle text="Profile" />
    <div v-if="auth.currentUser" class="profile-container">
        <div class="infos">
            <InfoList
                :list="[
                    {
                        title: 'Email :',
                        value: auth.currentUser.email,
                    },
                    {
                        title: 'Creation time :',
                        value: auth.currentUser.metadata.creationTime,
                    },
                    {
                        title: 'Last sign in time :',
                        value: auth.currentUser.metadata.lastSignInTime,
                    },
                ]"
            />
        </div>
        <AppButton label="Log out" @do-action="callbackDoAction" />
    </div>
    <div v-else class="profile-container">
        <span class="error">You are not logged in. To log in please follow this link:</span>
        <AppLink page="Login" />
    </div>
</template>

<style scoped>
.profile-container {
    padding: 0 7vw 5vh 7vw;
}

.infos {
    display: flex;
    flex-direction: column;
    padding-bottom: 30px;
}

.button {
    width: 100px;
    background-color: var(--white);
    border: 1px solid var(--black);
    color: var(--black);
    padding: 10px 0;
    border-radius: 5px;
}

.button:hover {
    background-color: var(--black);
    border-color: var(--black);
    color: var(--white);
}
</style>
