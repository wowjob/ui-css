export const normalizeFontWeight = (fontWeight) => {
    if (fontWeight === undefined ||
        fontWeight === null ||
        fontWeight === 'normal') {
        return 'normal'; // Default value
    }
    if (fontWeight === 'bold') {
        return 'bold';
    }
    if (typeof fontWeight === 'number') {
        // Ensure clamping to the range [1, 1000]
        const clampedValue = Math.min(1000, Math.max(1, fontWeight));
        return `${clampedValue}`;
    }
    return fontWeight;
};
