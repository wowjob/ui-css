import { convertToRem } from '../convert-to-rem';
import { isPx } from '../is-px';
export const normalizeGridAutoRows = (value) => {
    if (!value) {
        return 'auto'; // Default value
    }
    if (typeof value === 'string') {
        return isPx(value) ? convertToRem(value) : value;
    }
    if (typeof value === 'number') {
        return convertToRem(value);
    }
    if (Array.isArray(value)) {
        return value
            .map((trackSize) => {
            if (typeof trackSize === 'string') {
                return isPx(trackSize) ? convertToRem(trackSize) : trackSize;
            }
            if (typeof trackSize === 'number') {
                return convertToRem(trackSize);
            }
            return trackSize;
        })
            .join(' ');
    }
    return value;
};
