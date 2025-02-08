export const normalizeHyphenateCharacter = (value) => {
    if (!value || value === 'auto') {
        return 'auto'; // Default value
    }
    if (value === undefined || value === null) {
        return 'auto';
    }
    if (typeof value === 'string') {
        return value;
    }
    return value;
};
