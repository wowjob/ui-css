import { convertToRem } from '../convert-to-rem/convert-to-rem';
import { normalizeDirectional } from '../normalize-directional';
export const normalizePadding = (padding) => {
    return normalizeDirectional(padding, convertToRem);
};
