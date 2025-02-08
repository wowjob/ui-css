export const normalizeBackfaceVisibility = (backfaceVisibility) => {
    if (backfaceVisibility === null || backfaceVisibility === undefined) {
        return 'visible';
    }
    // Return valid values as-is
    return backfaceVisibility.toString();
};
