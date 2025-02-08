export const normalizeFlexGrow = (grow) => {
    if (typeof grow === 'number') {
        return grow.toString();
    }
    return grow || '0';
};
