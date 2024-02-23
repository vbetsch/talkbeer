import {baseAxios} from "./axios.ts";
import {BeerType} from "../types/Beer.ts";

export const getAllBeers = async () => {
    return await baseAxios.get<BeerType[]>("/beers");
}

export async function getOneBeerByID(id: string | RouteParamValue[]) {
    return await baseAxios.get<BeerType[]>(`/beers/${id}`);
}
