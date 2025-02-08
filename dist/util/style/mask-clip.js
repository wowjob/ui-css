export const normalizeMaskClip = (value) => {
    if (!value) {
        return 'content-box'; // Default value
    }
    if (typeof value === 'string') {
        return value;
    }
    if (Array.isArray(value)) {
        return value.join(', ');
    }
    return value;
};
