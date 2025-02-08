export const normalizeZIndex = (zIndex) => {
    if ((!zIndex && zIndex !== 0) || zIndex === 'auto') {
        return 'auto'; // Default value
    }
    return typeof zIndex === 'number' ? zIndex.toString() : zIndex;
};
