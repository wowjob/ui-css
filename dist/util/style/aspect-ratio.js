export const normalizeAspectRatio = (aspectRatio) => {
    if (aspectRatio === null || aspectRatio === undefined) {
        return 'auto';
    }
    // Return valid values as-is
    return aspectRatio.toString();
};
