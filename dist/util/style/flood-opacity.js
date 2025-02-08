export const normalizeFloodOpacity = (floodOpacity) => {
    if (!floodOpacity) {
        return '1'; // Default value (100% opacity)
    }
    return floodOpacity.toString();
};
