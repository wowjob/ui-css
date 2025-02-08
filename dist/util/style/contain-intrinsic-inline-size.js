import { convertToRem } from '../convert-to-rem';
import { isPx } from '../is-px';
export const normalizeContainIntrinsicInlineSize = (containIntrinsicInlineSize) => {
    if (!containIntrinsicInlineSize) {
        return 'none'; // Default value
    }
    if ((typeof containIntrinsicInlineSize === 'string' &&
        isPx(containIntrinsicInlineSize)) ||
        typeof containIntrinsicInlineSize === 'number') {
        return convertToRem(containIntrinsicInlineSize);
    }
    return containIntrinsicInlineSize;
};
