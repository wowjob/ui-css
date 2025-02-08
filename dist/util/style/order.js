export const normalizeOrder = (value) => {
    if (value === undefined || value === null) {
        return '0'; // Default value
    }
    if (typeof value === 'number') {
        return value;
    }
    if (typeof value === 'string') {
        return value;
    }
    return value;
};
