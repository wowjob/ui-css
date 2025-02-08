export const normalizeFontFamily = (fontFamily) => {
    if (!fontFamily) {
        return 'inherit'; // Default value for font-family
    }
    return fontFamily;
};
