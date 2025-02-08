import { convertToRem } from '../convert-to-rem';
import { isPx } from '../is-px';
export const normalizeBorderRight = (borderRight) => {
    if (typeof borderRight === 'string') {
        return borderRight;
    }
    if (borderRight === null || borderRight === undefined) {
        return 'none';
    }
    if (typeof borderRight === 'object') {
        const { color = 'currentcolor', style = 'none', width = 'medium', } = borderRight;
        const formattedWidth = isPx(String(width)) || typeof width === 'number'
            ? convertToRem(width)
            : width;
        return [formattedWidth, style, color].join(' ');
    }
    return 'none';
};
