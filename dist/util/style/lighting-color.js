export const normalizeLightingColor = (value) => {
    if (!value) {
        return 'currentcolor'; // Default to currentcolor
    }
    if (typeof value === 'string') {
        return value;
    }
    return value;
};
