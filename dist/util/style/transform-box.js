export const normalizeTransformBox = (transformBox) => {
    if (!transformBox) {
        return 'content-box'; // Default value
    }
    return transformBox;
};
