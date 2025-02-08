import { convertToRem } from '../convert-to-rem';
import { isPx } from '../is-px';
export const normalizeBorderBlock = (borderBlock) => {
    if (typeof borderBlock === 'string') {
        return borderBlock;
    }
    if (borderBlock === null || borderBlock === undefined) {
        return 'none';
    }
    if (typeof borderBlock === 'object') {
        const { width = 'medium', style = 'none', color = 'currentcolor', } = borderBlock;
        const widthValue = isPx(String(width)) || typeof width === 'number'
            ? convertToRem(width)
            : width;
        return [widthValue, style, color].join(' ');
    }
    return 'medium none currentcolor';
};
