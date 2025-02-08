export const normalizeBackground = (background) => {
    if (typeof background === 'string') {
        return background;
    }
    if (background === null || background === undefined) {
        return 'none';
    }
    if (Array.isArray(background)) {
        return background.join(' ');
    }
    if (typeof background === 'object') {
        const { color = 'transparent', image = 'none', positionX = 0, positionY = 0, size = 'auto', repeat = 'repeat', attachment = 'scroll', origin = 'padding-box', clip = 'border-box', blendMode = 'normal', } = background;
        return [
            color,
            image,
            `${positionX} ${positionY}`,
            size,
            repeat,
            attachment,
            origin,
            clip,
            blendMode,
        ].join(' ');
    }
    return 'transparent none 0 0 auto repeat scroll padding-box border-box normal';
};
