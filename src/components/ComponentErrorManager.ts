const checkNullValue = (value: number, componentName: string | undefined) => {
    if (value === 0) {
        throw new Error(`[ COMPONENT ${componentName ?? 'unknown'} ] A value cannot be null`);
    }
};

const checkMaxValue = (
    maxValue: number,
    currentValue: number,
    componentName: string | undefined,
) => {
    if (maxValue < currentValue) {
        throw new Error(
            `[ COMPONENT ${componentName ?? 'unknown'} ] The maximum value ${maxValue} is greater than the setting value ${currentValue}`,
        );
    }
};

export { checkNullValue, checkMaxValue };
