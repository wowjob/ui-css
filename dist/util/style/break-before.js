export const normalizeBreakBefore = (breakBefore) => {
    if (!breakBefore) {
        return 'auto'; // Default value
    }
    return breakBefore.toString();
};
