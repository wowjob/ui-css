export const normalizeWritingMode = (writingMode) => {
    if (!writingMode) {
        return 'horizontal-tb'; // Default value
    }
    return writingMode;
};
