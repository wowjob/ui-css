export const normalizeForcedColorAdjust = (forcedColorAdjust) => {
    if (!forcedColorAdjust) {
        return 'auto'; // Default value
    }
    return forcedColorAdjust;
};
