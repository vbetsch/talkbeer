enum LocalStorageKeys {
    FAVORITES = 'favorites',
}

const getLocalStorageValue = (key: LocalStorageKeys, defaultValue: string) => {
    return JSON.parse(localStorage.getItem(key) || defaultValue);
};
const setLocalStorageValue = (key: LocalStorageKeys, value: any) => {
    return localStorage.setItem(key, JSON.stringify(value));
};

export { LocalStorageKeys, getLocalStorageValue, setLocalStorageValue };
