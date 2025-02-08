export const normalizeScrollbarGutter = (scrollbarGutter) => {
    if (!scrollbarGutter) {
        return 'auto'; // Default value
    }
    return scrollbarGutter;
};
