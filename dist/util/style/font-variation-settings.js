export const normalizeFontVariationSettings = (fontVariationSettings) => {
    if (!fontVariationSettings) {
        return 'normal'; // Default value
    }
    return fontVariationSettings;
};
