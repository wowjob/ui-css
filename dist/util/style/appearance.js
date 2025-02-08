export const normalizeAppearance = (appearance) => {
    if (appearance === null || appearance === undefined) {
        return 'auto';
    }
    // Return valid values as-is
    return appearance;
};
