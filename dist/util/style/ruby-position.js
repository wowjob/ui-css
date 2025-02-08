export const normalizeRubyPosition = (value) => {
    if (!value || value === 'over') {
        return 'over'; // Default value
    }
    if (typeof value === 'string') {
        return value;
    }
    return value;
};
