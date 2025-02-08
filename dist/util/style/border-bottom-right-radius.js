import { convertToRem } from '../convert-to-rem';
import { isPx } from '../is-px';
export const normalizeBorderBottomRightRadius = (borderBottomRightRadius) => {
    if (typeof borderBottomRightRadius === 'string') {
        return isPx(borderBottomRightRadius)
            ? convertToRem(borderBottomRightRadius)
            : borderBottomRightRadius;
    }
    if (typeof borderBottomRightRadius === 'number') {
        return convertToRem(borderBottomRightRadius);
    }
    if (borderBottomRightRadius === null ||
        borderBottomRightRadius === undefined) {
        return '0';
    }
    return borderBottomRightRadius;
};
