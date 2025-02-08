export const normalizeFontVariant = (fontVariant) => {
    if (!fontVariant) {
        return 'normal'; // Default value for font-variant
    }
    return fontVariant;
};
