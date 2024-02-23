const checkProgressBar = (maxValue: number, progressValue: number, componentName: string | undefined) => {
    if (maxValue < progressValue) {
        throw new Error(`[ COMPONENT ${componentName} ] The maximum value is greater than the progress value`)
    }
}

export {checkProgressBar}
