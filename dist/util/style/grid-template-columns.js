export const normalizeGridTemplateColumns = (gridTemplateColumns) => {
    if (!gridTemplateColumns || gridTemplateColumns === 'none') {
        return 'none'; // Default value
    }
    return gridTemplateColumns;
};
