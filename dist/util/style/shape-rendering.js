export const normalizeShapeRendering = (shapeRendering) => {
    if (!shapeRendering) {
        return 'auto'; // Default value
    }
    return shapeRendering;
};
