export const normalizeTransform = (transform) => {
    if (!transform || transform === 'none') {
        return 'none'; // Default value
    }
    return transform;
};
