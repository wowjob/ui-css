export const normalizeBackgroundBlendMode = (backgroundBlendMode) => {
    if (backgroundBlendMode === null || backgroundBlendMode === undefined) {
        return 'normal';
    }
    // Return valid values as-is
    return backgroundBlendMode.toString();
};
