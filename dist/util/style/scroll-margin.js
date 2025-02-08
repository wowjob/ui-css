import { normalizeDirectional } from '../normalize-directional';
import { convertToRem } from '../convert-to-rem/convert-to-rem';
export const normalizeScrollMargin = (scrollMargin) => {
    return normalizeDirectional(scrollMargin, convertToRem);
};
