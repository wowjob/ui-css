export const normalizeFillOpacity = (fillOpacity) => {
    if (!fillOpacity) {
        return '1'; // Default value (100% opacity)
    }
    return fillOpacity.toString();
};
