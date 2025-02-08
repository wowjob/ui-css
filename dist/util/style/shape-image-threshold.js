export const normalizeShapeImageThreshold = (shapeImageThreshold) => {
    if (shapeImageThreshold === null || shapeImageThreshold === undefined) {
        return '0'; // Default value
    }
    return typeof shapeImageThreshold === 'number'
        ? shapeImageThreshold.toString()
        : shapeImageThreshold;
};
