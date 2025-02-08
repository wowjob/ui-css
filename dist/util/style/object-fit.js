export const normalizeObjectFit = (value) => {
    if (!value || value === 'fill') {
        return 'fill'; // Default value
    }
    if (typeof value === 'string') {
        return value;
    }
    return value;
};
