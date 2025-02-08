export const normalizeContentVisibility = (contentVisibility) => {
    if (!contentVisibility) {
        return 'visible'; // Default value
    }
    return contentVisibility;
};
