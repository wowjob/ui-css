export const normalizeJustifySelf = (value) => {
    if (!value || value === 'auto') {
        return 'auto'; // Default value
    }
    if (typeof value === 'string') {
        return value;
    }
    return value;
};
