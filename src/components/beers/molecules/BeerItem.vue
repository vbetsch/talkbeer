<script setup lang="ts">
import { router } from '../../../Router.ts';
import { BeerType } from '../../../types/Beer.ts';

export interface BeerItemProps {
    beer?: BeerType;
}

defineProps<BeerItemProps>();

const clickOnBeer = (id: number) => {
    router.push({
        name: 'Beer',
        params: {
            beerId: id,
        },
    });
};
</script>

<template>
    <div v-if="beer" class="beer" @click="clickOnBeer(beer?.id)">
        <img class="image" :src="beer?.image_url" :alt="beer?.name + ' image'" />
        <span class="text">{{ beer?.name }}</span>
    </div>
</template>

<style scoped>
.beer {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    text-align: center;
    cursor: pointer;
    gap: 20px;
}

.image {
    width: 50px;
    align-self: center;
}

.text {
    max-height: 20px;
    background-color: white;
}

.beer:hover {
    transform: scale(1.1);
}
.beer:hover .text {
    font-weight: 500;
}
</style>
