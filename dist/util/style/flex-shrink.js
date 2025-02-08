export const normalizeFlexShrink = (shrink) => {
    if (typeof shrink === 'number') {
        return shrink.toString();
    }
    return shrink || '1';
};
