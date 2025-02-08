import { convertToRem } from '../convert-to-rem';
import { isPx } from '../is-px';
export const normalizeContainIntrinsicSize = (containIntrinsicSize) => {
    if (!containIntrinsicSize) {
        return 'none'; // Default value
    }
    if ((typeof containIntrinsicSize === 'string' && isPx(containIntrinsicSize)) ||
        typeof containIntrinsicSize === 'number') {
        return convertToRem(containIntrinsicSize);
    }
    return containIntrinsicSize;
};
