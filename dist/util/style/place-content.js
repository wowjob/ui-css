export const normalizePlaceContent = (value) => {
    if (!value || value === 'stretch') {
        return 'stretch'; // Default value
    }
    if (typeof value === 'string') {
        return value;
    }
    return value;
};
