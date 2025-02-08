export const normalizeEmptyCells = (emptyCells) => {
    if (!emptyCells) {
        return 'show'; // Default value
    }
    return emptyCells;
};
