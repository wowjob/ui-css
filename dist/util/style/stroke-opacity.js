export const normalizeStrokeOpacity = (strokeOpacity) => {
    if (strokeOpacity === null || strokeOpacity === undefined) {
        return '1'; // Default value
    }
    return typeof strokeOpacity === 'number'
        ? strokeOpacity.toString()
        : strokeOpacity;
};
