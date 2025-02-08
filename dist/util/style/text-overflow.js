export const normalizeTextOverflow = (textOverflow) => {
    if (!textOverflow) {
        return 'clip'; // Default value
    }
    return textOverflow;
};
