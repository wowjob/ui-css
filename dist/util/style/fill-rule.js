export const normalizeFillRule = (fillRule) => {
    if (!fillRule) {
        return 'evenodd'; // Default value
    }
    return fillRule;
};
