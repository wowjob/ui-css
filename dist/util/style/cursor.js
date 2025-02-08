export const normalizeCursor = (cursor) => {
    if (!cursor) {
        return 'auto'; // Default value
    }
    return cursor;
};
