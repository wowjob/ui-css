export const normalizeAlignContent = (alignContent) => {
    if (alignContent === null || alignContent === undefined) {
        return 'normal';
    }
    // Return valid values as-is
    return alignContent.toString();
};
