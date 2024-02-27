import {defineStore} from "pinia";
import {reactive, ref} from "vue";
import {BeerType} from "../types/Beer.ts";
import {AxiosResponse} from "axios";
import {getAllBeers, getBeersByID, getOneBeerByID} from "../queries/beersQueries.ts";

export const useBeerStore = defineStore('beers', () => {
    let allBeers = reactive<BeerType[]>([]);
    let favoriteBeers = reactive<BeerType[]>([]);
    let currentBeer = reactive<BeerType>({} as BeerType);
    let isLoading = ref<boolean>(false);
    let errorMessage = ref<string>("");

    const setAllBeersFromData = async () => {
        if (allBeers.length) {
            return
        }
        isLoading.value = true;
        try {
            const response: AxiosResponse<BeerType[], any> = await getAllBeers();
            Object.assign(allBeers, response.data);
            errorMessage.value = ''
        } catch (e: any) {
            errorMessage.value = 'Error fetching data:' + e.message
            console.error(errorMessage.value);
        } finally {
            isLoading.value = false;
        }
    }
    const setFavoritesBeersFromData = async (ids: number[]) => {
        isLoading.value = true;
        try {
            const response: AxiosResponse<BeerType[], any> = await getBeersByID(ids);
            Object.assign(favoriteBeers, response.data);
            errorMessage.value = ''
        } catch (e: any) {
            errorMessage.value = 'Error fetching data:' + e.message
            console.error(errorMessage.value);
        } finally {
            isLoading.value = false;
        }
    }
    const setCurrentBeerFromData = async (beerId?: string) => {
        isLoading.value = true;
        try {
            if (
                !beerId ||
                (
                    'id' in currentBeer &&
                    beerId === currentBeer?.id.toString()
                )) {
                return
            }
            const {data}: { data: BeerType[] } = await getOneBeerByID(beerId);
            if (data?.length) {
                Object.assign(currentBeer, data[0]);
            }
            errorMessage.value = ''
        } catch (e: any) {
            errorMessage.value = 'Error fetching data:' + e.message
            console.error(errorMessage.value);
        } finally {
            isLoading.value = false;
        }
    }

    return {
        allBeers,
        favoriteBeers,
        currentBeer,
        isLoading,
        errorMessage,
        setAllBeersFromData,
        setFavoritesBeersFromData,
        setCurrentBeerFromData,
    }
})
