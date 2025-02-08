import { convertToRem } from '../convert-to-rem';
import { isPx } from '../is-px';
export const normalizeMarginBlock = (value) => {
    if (!value || value === 'auto') {
        return 'auto'; // Default value
    }
    const normalize = (val) => {
        if (typeof val === 'string') {
            return isPx(val) ? convertToRem(val) : val;
        }
        if (typeof val === 'number') {
            return convertToRem(val);
        }
        return 'auto';
    };
    if (typeof value === 'string' || typeof value === 'number') {
        return normalize(value);
    }
    if (Array.isArray(value)) {
        const [start = 'auto', end = start] = value.map((item) => typeof item === 'string' || typeof item === 'number'
            ? normalize(item)
            : 'auto');
        return start === end ? `${start}` : `${start} ${end}`;
    }
    if (typeof value === 'object' && value !== null) {
        const start = typeof value.start === 'string' || typeof value.start === 'number'
            ? normalize(value.start)
            : 'auto';
        const end = typeof value.end === 'string' || typeof value.end === 'number'
            ? normalize(value.end)
            : 'auto';
        return `${start} ${end}`;
    }
    return value;
};
