export const normalizeWillChange = (willChange) => {
    if (!willChange) {
        return 'auto'; // Default value
    }
    return willChange;
};
