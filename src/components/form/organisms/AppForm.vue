<script setup lang="ts">
import AppField, {AppFieldProps} from "../molecules/AppField.vue";
import {reactive} from "vue";

export interface AppFormProps {
    fields: AppFieldProps[]
}

const props = defineProps<AppFormProps>()

const emit = defineEmits<{
    submitValues: [any]
}>()

let mapping = reactive({} as any)

const onSubmit = (e: Event) => {
    e.preventDefault();
    console.log("(29/02/2024 00:08)  @reyks  [ AppForm.vue:19 -  - onSubmit ]  ");
    emit('submitValues', mapping)
}

const callbackChangeValue = (keyName: string, value: string) => {
    mapping[keyName] = value
}
</script>

<template>
    <form class="form" @submit="onSubmit">
        <div class="form-fields">
            <AppField
                v-for="field in fields"
                :type="field.type"
                :keyName="field.keyName"
                :label="field.label"
                :placeholder="field.placeholder"
                :required="field.required"
                @changeValue="callbackChangeValue"
            />
        </div>
        <input
            class="form-button"
            type="submit"
            value="Submit"
        >
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
</style>
