export const normalizeStopOpacity = (stopOpacity) => {
    if (stopOpacity === null || stopOpacity === undefined) {
        return '1'; // Default value
    }
    return typeof stopOpacity === 'number' ? stopOpacity.toString() : stopOpacity;
};
