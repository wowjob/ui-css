export const normalizeOpacity = (value) => {
    if (!value && value !== 0) {
        return '1'; // Default value (fully opaque)
    }
    if (typeof value === 'string' || typeof value === 'number') {
        return value;
    }
    return value;
};
