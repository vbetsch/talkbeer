<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {ref} from "vue";

export interface ButtonProps {
    label?: string
    icon?: IconDefinition
    iconHover?: IconDefinition
}

const props = withDefaults(defineProps<ButtonProps>(), {})

let currentIcon = ref<IconDefinition | undefined>(props.icon)

const emit = defineEmits<{
    doAction: []
}>()

const onClick = () => {
    emit('doAction')
}

const onMouseEnter = () => {
    if (props.icon && props.iconHover) {
        currentIcon.value = props.iconHover
    }
}
const onMouseLeave = () => {
    if (props.icon) {
        currentIcon.value = props.icon
    }
}
</script>

<template>
    <div class="button"
         @click="onClick"
         @mouseenter="onMouseEnter"
         @mouseleave="onMouseLeave"
    >
        <FontAwesomeIcon v-if="icon" class="icon" :icon="currentIcon"/>
        <span v-if="label">{{ label }}</span>
    </div>
</template>

<style scoped>
.button {
    display: flex;
    height: fit-content;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
    padding: 5px;
    cursor: pointer;
}
</style>
