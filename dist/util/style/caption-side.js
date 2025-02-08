export const normalizeCaptionSide = (captionSide) => {
    if (!captionSide) {
        return 'top'; // Default value
    }
    return captionSide.toString();
};
