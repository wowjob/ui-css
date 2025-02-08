export const normalizeBackgroundClip = (backgroundClip) => {
    if (backgroundClip === null || backgroundClip === undefined) {
        return 'border-box';
    }
    // Return valid values as-is
    return backgroundClip.toString();
};
