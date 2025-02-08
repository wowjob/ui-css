export const normalizeCaretColor = (caretColor) => {
    if (!caretColor) {
        return 'auto'; // Default value
    }
    return caretColor.toString();
};
