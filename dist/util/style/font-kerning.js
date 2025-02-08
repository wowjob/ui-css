export const normalizeFontKerning = (fontKerning) => {
    if (!fontKerning) {
        return 'auto'; // Default value
    }
    return fontKerning;
};
