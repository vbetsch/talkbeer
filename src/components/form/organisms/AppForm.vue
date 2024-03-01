<script setup lang="ts">
import AppField, { AppFieldProps } from '../molecules/AppField.vue';
import { reactive } from 'vue';
import AppStateManagement from '../../states/molecules/AppStateManagement.vue';
import AppSubLink, { AppSubLinkProps } from '../../links/molecules/AppSubLink.vue';

export interface AppFormProps {
    fields: AppFieldProps[];
    loading: boolean;
    error: string;
    textButton?: string;
    sublink?: AppSubLinkProps;
}

defineProps<AppFormProps>();

const emit = defineEmits<{
    submitValues: [any];
}>();

let mapping = reactive({} as any);

const onSubmit = (e: Event) => {
    e.preventDefault();
    emit('submitValues', mapping);
};

const callbackChangeValue = (keyName: string, value: string) => {
    mapping[keyName] = value;
};
</script>

<template>
    <form class="form" @submit="onSubmit">
        <div class="form-fields">
            <AppField
                v-for="(field, key) in fields"
                :key="key"
                :type="field.type"
                :key-name="field.keyName"
                :label="field.label"
                :placeholder="field.placeholder"
                :required="field.required"
                @change-value="callbackChangeValue"
            />
        </div>
        <div class="app-state-management">
            <AppStateManagement :loading="loading" :error-message="error" />
        </div>
        <div class="footer">
            <AppSubLink
                v-if="sublink"
                :before-text="sublink.beforeText"
                :after-text="sublink.afterText"
                :link="sublink.link"
            />
            <input class="form-button" type="submit" :value="textButton ?? 'Submit'" />
        </div>
    </form>
</template>

<style scoped>
.form {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding: 15px 40px 10px 40px;
    gap: 30px;
}

.form-fields {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.form-button {
    width: 100%;
    background-color: var(--white);
    border: 1px solid var(--black);
    color: var(--black);
    padding: 10px 0;
    border-radius: 5px;
}

.form-button:hover {
    background-color: var(--black);
    border-color: var(--black);
    color: var(--white);
}

.footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.app-state-management {
    width: 250px;
    overflow: hidden;
}

.sublink {
    width: 100%;
}
</style>
