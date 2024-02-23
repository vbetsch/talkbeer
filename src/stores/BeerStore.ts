import {defineStore} from "pinia";
import {reactive} from "vue";
import {BeerType} from "../types/Beer.ts";

export const useBeerStore = defineStore('beer', () => {
    let allBeers = reactive<BeerType[]>([]);
    let currentBeer = reactive<BeerType>({} as BeerType);

    const setBeers = (newBeers: BeerType[]) => {
        allBeers = newBeers
    }

    const setCurrentbeer = (newCurrentBeer: BeerType) => {
        currentBeer = newCurrentBeer
    }

    return {allBeers, currentBeer}
})
