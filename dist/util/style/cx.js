import { convertToRem } from '../convert-to-rem';
import { isPx } from '../is-px';
export const normalizeCx = (cx) => {
    if (!cx) {
        return ''; // Default empty value
    }
    if ((typeof cx === 'string' && isPx(cx)) || typeof cx === 'number') {
        return convertToRem(cx);
    }
    return cx;
};
