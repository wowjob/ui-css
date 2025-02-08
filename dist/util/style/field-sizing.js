export const normalizeFieldSizing = (fieldSizing) => {
    if (!fieldSizing) {
        return 'content'; // Default value
    }
    return fieldSizing;
};
