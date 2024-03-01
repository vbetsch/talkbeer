const replaceArrayTo = (array: Array<any>) => {
    return [...array];
};

const addItemToArray = (item: any, array: Array<any>) => {
    if (array.includes(item)) {
        return array;
    }
    return [...array, item];
};

const removeItemFromArray = (item: any, array: Array<any>) => {
    const index = array.indexOf(item, 0);
    if (index < 0) {
        return array;
    }
    array.splice(index, 1);
    return array;
};

export { replaceArrayTo, addItemToArray, removeItemFromArray };
