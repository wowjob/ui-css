export const normalizeZoom = (zoom) => {
    if (!zoom || zoom === 'normal') {
        return 'normal'; // Default value
    }
    return typeof zoom === 'number' ? zoom.toString() : zoom;
};
