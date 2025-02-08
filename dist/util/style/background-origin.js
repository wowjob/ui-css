export const normalizeBackgroundOrigin = (backgroundOrigin) => {
    if (backgroundOrigin === null || backgroundOrigin === undefined) {
        return 'border-box';
    }
    // Return valid values as-is
    return backgroundOrigin;
};
