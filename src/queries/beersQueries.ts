import {baseAxios} from "./axios.ts";
import {BeerType} from "../types/Beer.ts";

export async function getAllBeers() {
    return await baseAxios.get<BeerType[]>("/beers");
}

export async function getOneBeerByID(id: string | RouteParamValue[]) {
    return await baseAxios.get<BeerType[]>(`/beers/${id}`);
}
