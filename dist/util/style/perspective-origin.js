export const normalizePerspectiveOrigin = (value) => {
    if (!value || value === 'center') {
        return 'center'; // Default value
    }
    if (typeof value === 'string') {
        return value;
    }
    return value;
};
