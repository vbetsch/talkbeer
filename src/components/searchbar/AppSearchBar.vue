<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {computed, ref, watch} from "vue";
import {BeerType} from "../../types/Beer.ts";

export interface AppSearchBarProps {
    list: BeerType[]
    placeholder: string
    totalWidth?: string
    iconWidth?: string
}

const props = withDefaults(defineProps<AppSearchBarProps>(), {
    totalWidth: "300px",
    iconWidth: "15px"
})

const emit = defineEmits<{
    displayOriginalList: [status: boolean]
    applyFilter: [list: BeerType[]]
}>()

let _gap = ref<string>("5px")
let inputValue = ref<string>("")
let searchMode = ref<boolean>(false)

const computeTotalWidth = computed(() => `width: ${props.totalWidth};`)
const computeIconSize = computed(() => `width: ${props.iconWidth}; height: ${props.iconWidth};`)
const computeInputSize = computed(() => `width: calc(calc(100% - ${props.iconWidth}) - ${_gap.value});`)

const getDataFromFilter = (input: string) => {
    return props.list.filter((beer: BeerType) => (beer.name.toLowerCase().includes(input.toLowerCase())))
}

watch(inputValue, (newValue, oldValue) => {
    if (searchMode && newValue !== oldValue) {
        const data = getDataFromFilter(newValue)
        emit('applyFilter', data)
    }
})
watch(searchMode, (newValue, oldValue) => {
    if (newValue !== oldValue) {
        emit('displayOriginalList', !newValue)
    }
})
</script>

<template>
    <div class="searchbar" :style="computeTotalWidth">
        <input
            class="search-input"
            type="text"
            v-model="inputValue"
            :style="computeInputSize"
            :placeholder="placeholder"
            @focusout="searchMode = false"
            @keyup="searchMode = true"
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
