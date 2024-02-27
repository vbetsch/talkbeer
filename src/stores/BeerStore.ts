import {defineStore} from "pinia";
import {reactive, ref} from "vue";
import {BeerType} from "../types/Beer.ts";
import {AxiosResponse} from "axios";
import {getAllBeers, getBeersByID, getOneBeerByID} from "../queries/beersQueries.ts";
import {addItemToArray, removeItemFromArray} from "./StoreService.ts";

export const useBeerStore = defineStore('beers', () => {
    let isLoading = ref<boolean>(false);
    let errorMessage = ref<string>("");
    let allBeers = reactive<BeerType[]>([]);
    let favoriteBeers = reactive<BeerType[]>([]);
    let favoriteIdBeers = reactive<number[]>([]);
    let currentBeer = reactive<BeerType>({} as BeerType);

    // ======================================= ALL BEERS =======================================
    const fetchAllBeers = async () => {
        if (allBeers.length) {
            return
        }
        isLoading.value = true;
        try {
            const response: AxiosResponse<BeerType[], any> = await getAllBeers();
            Object.assign(allBeers, response.data);
            errorMessage.value = ''
        } catch (e: any) {
            errorMessage.value = 'Error fetching data: ' + e.message
            console.error(errorMessage.value);
        } finally {
            isLoading.value = false;
        }
    }

    // ======================================= FAVORITES =======================================
    const fetchLocalFavorites = () => {
        const ids = JSON.parse(localStorage.getItem("favorites") || "[]")
        favoriteIdBeers = Object.assign(favoriteIdBeers, ids);
    }
    const fetchFavoritesFromData = async () => {
        isLoading.value = true;
        try {
            // Recommended to use fetchLocalFavorites();
            const response: AxiosResponse<BeerType[], any> = await getBeersByID(favoriteIdBeers);
            favoriteBeers = Object.assign(favoriteBeers, response.data);
            errorMessage.value = ''
        } catch (e: any) {
            errorMessage.value = 'Error fetching data: ' + e.message
            console.error(errorMessage.value);
        } finally {
            isLoading.value = false;
        }
    }
    const addBeerToFavorites = (beerId: number) => {
        const ids = addItemToArray(beerId, JSON.parse(localStorage.getItem("favorites") || "[]"))
        localStorage.setItem("favorites", JSON.stringify(ids));
        favoriteIdBeers = Object.assign(favoriteIdBeers, ids);
    }
    const removeBeerToFavorites = (beerId: number) => {
        const ids = removeItemFromArray(beerId, JSON.parse(localStorage.getItem("favorites") || "[]"))
        localStorage.setItem("favorites", JSON.stringify(ids));
        favoriteIdBeers = Object.assign(favoriteIdBeers, ids);
    }

    // ======================================= CURRENT BEER =======================================
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
            errorMessage.value = 'Error fetching data: ' + e.message
            console.error(errorMessage.value);
        } finally {
            isLoading.value = false;
        }
    }

    return {
        allBeers,
        favoriteBeers,
        favoriteIdBeers,
        currentBeer,
        isLoading,
        errorMessage,
        fetchAllBeers,
        fetchLocalFavorites,
        fetchFavoritesFromData,
        addBeerToFavorites,
        removeBeerToFavorites,
        setCurrentBeerFromData,
    }
})
