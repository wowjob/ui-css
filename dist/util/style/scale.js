export const normalizeScale = (value) => {
    if (!value || value === 'none') {
        return 'none'; // Default value
    }
    if (typeof value === 'string' || typeof value === 'number') {
        return value.toString();
    }
    return value;
};
