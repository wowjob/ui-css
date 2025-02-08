export const normalizeStrokeLinejoin = (strokeLinejoin) => {
    if (!strokeLinejoin) {
        return 'miter'; // Default value
    }
    return strokeLinejoin;
};
