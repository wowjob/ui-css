import { normalizeDirectional } from '../normalize-directional';
import { convertToRem } from '../convert-to-rem/convert-to-rem';
export const normalizeScrollPadding = (scrollPadding) => {
    return normalizeDirectional(scrollPadding, convertToRem);
};
