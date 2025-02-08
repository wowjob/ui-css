export const normalizeAlignSelf = (alignSelf) => {
    if (alignSelf === null || alignSelf === undefined) {
        return 'auto';
    }
    // Return valid values as-is
    return alignSelf;
};
