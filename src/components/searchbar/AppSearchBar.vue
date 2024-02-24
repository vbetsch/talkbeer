<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {computed, ref} from "vue";

export interface AppSearchBarProps {
    placeholder: string
    totalWidth?: string
    iconWidth?: string
}

const props = defineProps<AppSearchBarProps>()

let _total_width = ref(props.totalWidth ?? "300px")
let _icon_width = ref(props.iconWidth ?? "15px")
let inputValue = ref<string>("")
let searchMode = ref<boolean>(false)

// TODO: Move to navbar
// function onKeyUpSearchBar() {
//     searchMode.value = true;
//     displayedBeers = store.allBeers.filter((beer: BeerType) => (
//         beer.name.includes(inputValue.value)
//     ))
// }

const computeTotalWidth = computed(() => `width: ${_total_width.value};`)
const computeIconSize = computed(() => `width: ${_icon_width.value}; height: ${_icon_width.value};`)
</script>

<template>
    <div class="searchbar" :style="computeTotalWidth">
        <input
            class="search-input"
            type="text"
            v-model="inputValue"
            :placeholder="placeholder"
            @keyup=""
            @focusout="searchMode = false"
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
    gap: 5%;
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

.search-input:focus + .icon {
    color: var(--grey);
}
</style>
