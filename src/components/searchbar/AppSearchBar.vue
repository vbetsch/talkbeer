<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

export interface AppSearchBarProps {
    placeholder: string
}

const props = defineProps<AppSearchBarProps>()
</script>

<template>
    <div class="searchbar">
        <input class="search-input" type="text" :placeholder="props.placeholder">
        <FontAwesomeIcon class="icon" :icon="faMagnifyingGlass"/>
    </div>
</template>

<style scoped>
.searchbar {
    position: relative;
}

.search-input {
    border-radius: 15px;
    border: 1px solid #b7b7b7;
    outline: none;
    padding: 3px 32px 3px 10px;
}

.icon {
    position: absolute;
    color: #b7b7b7;
    top: 24%;
    right: 4%;
}

.search-input:focus {
    border-color: var(--grey);
}

.search-input:focus + .icon {
    color: var(--grey);
}

</style>
