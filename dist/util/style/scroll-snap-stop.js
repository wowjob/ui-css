export const normalizeScrollSnapStop = (scrollSnapStop) => {
    if (!scrollSnapStop) {
        return 'normal'; // Default value
    }
    return scrollSnapStop;
};
