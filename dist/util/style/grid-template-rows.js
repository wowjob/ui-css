export const normalizeGridTemplateRows = (gridTemplateRows) => {
    if (!gridTemplateRows || gridTemplateRows === 'none') {
        return 'none'; // Default value
    }
    return gridTemplateRows;
};
