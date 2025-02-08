export const normalizeTransformOrigin = (transformOrigin) => {
    if (!transformOrigin) {
        return '50% 50% 0'; // Default value
    }
    return transformOrigin;
};
