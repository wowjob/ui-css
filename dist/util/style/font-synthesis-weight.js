export const normalizeFontSynthesisWeight = (fontSynthesisWeight) => {
    if (!fontSynthesisWeight) {
        return 'auto'; // Default value
    }
    return fontSynthesisWeight;
};
