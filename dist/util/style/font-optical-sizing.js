export const normalizeFontOpticalSizing = (fontOpticalSizing) => {
    if (!fontOpticalSizing) {
        return 'auto'; // Default value
    }
    return fontOpticalSizing;
};
