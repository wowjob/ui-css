export const normalizeTouchAction = (touchAction) => {
    if (!touchAction) {
        return 'auto'; // Default value
    }
    return touchAction;
};
