export const normalizeScrollBehavior = (scrollBehavior) => {
    if (!scrollBehavior) {
        return 'auto'; // Default value
    }
    return scrollBehavior;
};
