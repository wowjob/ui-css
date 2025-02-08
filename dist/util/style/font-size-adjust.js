export const normalizeFontSizeAdjust = (fontSizeAdjust) => {
    if (!fontSizeAdjust) {
        return 'none'; // Default value
    }
    return fontSizeAdjust.toString();
};
