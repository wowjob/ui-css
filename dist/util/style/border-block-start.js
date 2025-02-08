import { convertToRem } from '../convert-to-rem';
import { isPx } from '../is-px';
export const normalizeBorderBlockStart = (borderBlockStart) => {
    if (typeof borderBlockStart === 'string') {
        return borderBlockStart;
    }
    if (borderBlockStart === null || borderBlockStart === undefined) {
        return 'none';
    }
    if (typeof borderBlockStart === 'object') {
        const { width = 'medium', style = 'none', color = 'currentcolor', } = borderBlockStart;
        const widthValue = isPx(String(width)) || typeof width === 'number'
            ? convertToRem(width)
            : width;
        return [widthValue, style, color].join(' ');
    }
    return 'medium none currentcolor';
};
