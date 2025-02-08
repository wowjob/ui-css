export const normalizeColorInterpolationFilters = (colorInterpolationFilters) => {
    if (!colorInterpolationFilters) {
        return 'auto'; // Default value
    }
    return colorInterpolationFilters;
};
