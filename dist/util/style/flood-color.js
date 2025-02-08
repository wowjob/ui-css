export const normalizeFloodColor = (floodColor) => {
    if (!floodColor) {
        return 'currentcolor'; // Default value
    }
    return floodColor;
};
