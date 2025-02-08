export const normalizeStrokeDasharray = (strokeDasharray) => {
    if (!strokeDasharray || strokeDasharray === 'none') {
        return 'none'; // Default value
    }
    if (Array.isArray(strokeDasharray)) {
        return strokeDasharray.join(', ');
    }
    return strokeDasharray.toString();
};
