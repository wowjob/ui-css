import { convertToRem } from '../convert-to-rem';
import { isPx } from '../is-px';
export const normalizeContainIntrinsicHeight = (containIntrinsicHeight) => {
    if (!containIntrinsicHeight) {
        return 'none'; // Default value
    }
    if ((typeof containIntrinsicHeight === 'string' &&
        isPx(containIntrinsicHeight)) ||
        typeof containIntrinsicHeight === 'number') {
        return convertToRem(containIntrinsicHeight);
    }
    return containIntrinsicHeight;
};
