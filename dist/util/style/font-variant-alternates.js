export const normalizeFontVariantAlternates = (fontVariantAlternates) => {
    if (!fontVariantAlternates) {
        return 'normal'; // Default value
    }
    return fontVariantAlternates;
};
