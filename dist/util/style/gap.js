import { convertToRem } from '../convert-to-rem';
import { isPx } from '../is-px';
export const normalizeGap = (gap) => {
    if (!gap) {
        return '0'; // Default value
    }
    const gapList = Array.isArray(gap) ? gap : [gap];
    return gapList
        .slice(0, 2)
        .map((value) => {
        if (value === undefined || value === null) {
            return '0';
        }
        if (typeof value === 'string') {
            return isPx(value) ? convertToRem(value) : value;
        }
        if (typeof value === 'number') {
            return convertToRem(value);
        }
    })
        .join(' ');
};
