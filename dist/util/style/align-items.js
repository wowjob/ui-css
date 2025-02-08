export const normalizeAlignItems = (alignItems) => {
    if (alignItems === null || alignItems === undefined) {
        return 'normal';
    }
    // Return valid values as-is
    return alignItems;
};
