import { normalizeDirectional } from '../normalize-directional';
import { convertToRem } from '../convert-to-rem/convert-to-rem';
export const normalizeBorderWidth = (width) => {
    return normalizeDirectional(width, convertToRem);
};
