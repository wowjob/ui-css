import { convertToRem } from '../convert-to-rem';
import { isPx } from '../is-px';
export const normalizeCy = (cy) => {
    if (!cy) {
        return ''; // Default empty value
    }
    if ((typeof cy === 'string' && isPx(cy)) || typeof cy === 'number') {
        return convertToRem(cy);
    }
    return cy;
};
