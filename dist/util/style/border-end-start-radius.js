import { convertToRem } from '../convert-to-rem';
import { isPx } from '../is-px';
export const normalizeBorderEndStartRadius = (borderEndStartRadius) => {
    if (typeof borderEndStartRadius === 'string') {
        return isPx(borderEndStartRadius)
            ? convertToRem(borderEndStartRadius)
            : borderEndStartRadius;
    }
    if (typeof borderEndStartRadius === 'number') {
        return convertToRem(borderEndStartRadius);
    }
    if (borderEndStartRadius === null || borderEndStartRadius === undefined) {
        return '0';
    }
    return borderEndStartRadius;
};
