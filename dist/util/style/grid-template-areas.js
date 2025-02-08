export const normalizeGridTemplateAreas = (value) => {
    if (!value || value === 'none') {
        return 'none'; // Default value
    }
    if (typeof value === 'string') {
        return value;
    }
    if (Array.isArray(value)) {
        return value.map((area) => `"${area}"`).join(' ');
    }
    return value;
};
