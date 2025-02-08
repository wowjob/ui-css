export const normalizeBorderCollapse = (borderCollapse) => {
    if (borderCollapse === null || borderCollapse === undefined) {
        return 'separate';
    }
    return borderCollapse;
};
