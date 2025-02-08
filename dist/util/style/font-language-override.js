export const normalizeFontLanguageOverride = (fontLanguageOverride) => {
    if (!fontLanguageOverride) {
        return 'normal'; // Default value
    }
    return fontLanguageOverride;
};
