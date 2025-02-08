export const normalizeUserSelect = (userSelect) => {
    if (!userSelect) {
        return 'auto'; // Default value
    }
    return userSelect;
};
