export enum LocalStorageKeys {
    FAVORITES = "favorites"
}

export const getLocalStorageValue = (key: LocalStorageKeys, defaultValue: string) => {
    return JSON.parse(localStorage.getItem(key) || defaultValue)
}
export const setLocalStorageValue = (key: LocalStorageKeys, value: any) => {
    return localStorage.setItem(key, JSON.stringify(value))
}
