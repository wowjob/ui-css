import { convertToRem } from '../convert-to-rem';
import { isPx } from '../is-px';
export const normalizeColumnGap = (columnGap) => {
    if (!columnGap) {
        return 'normal'; // Default value
    }
    if ((typeof columnGap === 'string' && isPx(columnGap)) ||
        typeof columnGap === 'number') {
        return convertToRem(columnGap);
    }
    return columnGap;
};
