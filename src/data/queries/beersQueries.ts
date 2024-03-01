import { baseAxios } from '../axios.ts';
import { BeerType } from '../../types/Beer.ts';

export const getAllBeers = async () => await baseAxios.get<BeerType[]>('/beers');
export const getOneBeerByID = async (id: number | string) =>
    await baseAxios.get<BeerType[]>(`/beers/${id}`);
export const getBeersByID = async (ids: number[]) =>
    await baseAxios.get<BeerType[]>('/beers', {
        params: {
            ids: ids.join('|'),
        },
    });
