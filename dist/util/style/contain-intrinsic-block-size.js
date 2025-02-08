import { convertToRem } from '../convert-to-rem';
import { isPx } from '../is-px';
export const normalizeContainIntrinsicBlockSize = (containIntrinsicBlockSize) => {
    if (!containIntrinsicBlockSize) {
        return 'none'; // Default value
    }
    if ((typeof containIntrinsicBlockSize === 'string' &&
        isPx(containIntrinsicBlockSize)) ||
        typeof containIntrinsicBlockSize === 'number') {
        return convertToRem(containIntrinsicBlockSize);
    }
    return containIntrinsicBlockSize;
};
