export const normalizeAccentColor = (accentColor) => {
    if (accentColor === null || accentColor === undefined) {
        return 'auto';
    }
    // Return valid values as-is
    return accentColor;
};
