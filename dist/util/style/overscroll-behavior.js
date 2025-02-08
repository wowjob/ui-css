export const normalizeOverscrollBehavior = (value) => {
    if (!value) {
        return 'auto'; // Default value
    }
    if (typeof value === 'string') {
        return value;
    }
    if (typeof value === 'object' && !Array.isArray(value)) {
        const { x = 'auto', y = 'auto' } = value;
        return x === y ? x : `${x} ${y}`;
    }
    return String(value);
};
