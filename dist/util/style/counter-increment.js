export const normalizeCounterIncrement = (counterIncrement) => {
    if (!counterIncrement) {
        return 'none'; // Default value
    }
    return counterIncrement;
};
