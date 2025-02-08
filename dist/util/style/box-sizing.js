export const normalizeBoxSizing = (boxSizing) => {
    if (!boxSizing) {
        return 'border-box'; // Default value
    }
    return boxSizing.toString();
};
