import { convertToRem } from '../convert-to-rem/convert-to-rem';
import { normalizeDirectional } from '../normalize-directional';
export const normalizeMargin = (margin) => normalizeDirectional(margin, convertToRem);
