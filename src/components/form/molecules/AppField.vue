<script setup lang="ts">
import { ref, watch } from 'vue';
import { FieldTypeSupported } from '../../../types/FieldTypeSupported.ts';

export interface AppFieldProps {
    keyName: string;
    type: FieldTypeSupported;
    label: string;
    placeholder: string;
    required?: boolean;
}

const props = defineProps<AppFieldProps>();

const emit = defineEmits<{
    changeValue: [keyName: string, value: string];
}>();

let value = ref<string>();

watch(value, (newValue, oldValue) => {
    if (newValue && newValue !== oldValue) {
        emit('changeValue', props.keyName, newValue);
    }
});
</script>

<template>
    <div class="form-field">
        <label class="form-label" :for="keyName">
            {{ label }}<span v-if="required" class="required">*</span>
        </label>
        <input
            :id="keyName"
            v-model="value"
            class="form-input"
            :name="keyName"
            :type="type"
            :placeholder="placeholder"
            :required="required"
        />
    </div>
</template>

<style scoped>
.form-field {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.form-label {
    user-select: none;
}

.form-input {
    padding: 5px;
    border: none;
    border-bottom: 1px solid var(--light-grey);
    outline: none;
}

.form-input:focus {
    border-color: #ffcb89;
}

.form-input::placeholder {
    font-size: 1em;
    height: 10px;
}

.required {
    color: red;
}
</style>
