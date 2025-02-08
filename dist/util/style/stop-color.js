export const normalizeStopColor = (stopColor) => {
    if (!stopColor) {
        return 'currentcolor'; // Default value
    }
    return stopColor;
};
