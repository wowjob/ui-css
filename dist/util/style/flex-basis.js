import { convertToRem } from '../convert-to-rem';
import { isPx } from '../is-px';
export const normalizeFlexBasis = (basis) => {
    if (isPx(basis)) {
        return convertToRem(basis);
    }
    return basis || 'auto';
};
