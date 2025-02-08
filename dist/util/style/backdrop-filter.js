export const normalizeBackdropFilter = (backdropFilter) => {
    if (backdropFilter === null || backdropFilter === undefined) {
        return 'none';
    }
    // Return valid values as-is
    return backdropFilter;
};
