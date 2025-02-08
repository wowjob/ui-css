export const normalizeRotate = (value) => {
    if (!value || value === 'none') {
        return 'none'; // Default value
    }
    if (typeof value === 'string') {
        return value;
    }
    return value;
};
