import {baseAxios} from "./axios.ts";

export async function getAllBeers() {
    return await baseAxios.get<BeerType[]>("/beers");
}

export async function getOneBeerByID(id: number) {
    return await baseAxios.get<BeerType>(`/beers/${id}`);
}
