import { convertToRem } from '../convert-to-rem';
import { isPx } from '../is-px';
export const normalizeTabSize = (tabSize) => {
    if (tabSize === null || tabSize === undefined) {
        return '8'; // Default value for tab-size
    }
    if (typeof tabSize === 'string' && isPx(tabSize)) {
        return convertToRem(tabSize);
    }
    return tabSize.toString();
};
