export const normalizePosition = (value) => {
    if (!value || value === 'static') {
        return 'static'; // Default value
    }
    if (typeof value === 'string') {
        return value;
    }
    return value;
};
