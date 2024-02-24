<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {computed, ref} from "vue";

export interface AppSearchBarProps {
    placeholder: string
    totalWidth?: string
    iconWidth?: string
}

const props = withDefaults(defineProps<AppSearchBarProps>(), {
    totalWidth: "300px",
    iconWidth: "15px"
})

defineEmits<{
    applyFilter: [text: string]
    disableSearchMode: []
}>()

let _gap = ref<string>("5px")
let inputValue = ref<string>("")

const computeTotalWidth = computed(() => `width: ${props.totalWidth};`)
const computeIconSize = computed(() => `width: ${props.iconWidth}; height: ${props.iconWidth};`)
const computeInputSize = computed(() => `width: calc(calc(100% - ${props.iconWidth}) - ${_gap.value});`)
</script>

<template>
    <div class="searchbar" :style="computeTotalWidth">
        <input
            class="search-input"
            type="text"
            v-model="inputValue"
            :style="computeInputSize"
            :placeholder="placeholder"
            @focusout="$emit('disableSearchMode')"
            @keyup="$emit('applyFilter', inputValue)"
        >
        <div class="icon-container" :style="computeIconSize">
            <FontAwesomeIcon
                class="icon"
                :icon="faMagnifyingGlass"
            />
        </div>
    </div>
</template>

<style scoped>
.searchbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #b7b7b7;
    border-radius: 15px;
    padding: 5px 10px;
}

.search-input {
    border: none;
    outline: none;
}

.icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.icon {
    height: 100%;
    width: 100%;
    color: #b7b7b7;
}

.searchbar:has(.search-input:focus) {
    border-color: var(--grey);
}

.search-input:focus + .icon-container .icon {
    color: var(--grey);
}
</style>
