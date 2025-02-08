export const normalizePlaceItems = (value) => {
    if (!value || value === 'normal') {
        return 'normal'; // Default value
    }
    if (typeof value === 'string') {
        return value;
    }
    return value;
};
