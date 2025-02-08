export const normalizeColumnCount = (columnCount) => {
    if (columnCount === undefined || columnCount === null) {
        return 'auto'; // Default value
    }
    return columnCount;
};
