export const normalizeTextEmphasis = (textEmphasis) => {
    if (!textEmphasis) {
        return 'none'; // Default value
    }
    if (typeof textEmphasis === 'string') {
        return textEmphasis;
    }
    const { style, color, position } = textEmphasis;
    return [style, color, position].filter(Boolean).join(' ');
};
