export const normalizeStrokeLinecap = (strokeLinecap) => {
    if (!strokeLinecap) {
        return 'butt'; // Default value
    }
    return strokeLinecap;
};
