export const normalizeOffset = (value) => {
    if (!value) {
        return 'none'; // Default value
    }
    if (typeof value === 'string') {
        return value;
    }
    if (Array.isArray(value)) {
        // Filter out empty or undefined values
        return value.filter((item) => !!item).join(' ');
    }
    if (typeof value === 'object') {
        const { path = '', distance = '', rotate = '' } = value;
        return [path, distance, rotate].filter(Boolean).join(' ');
    }
    return value;
};
