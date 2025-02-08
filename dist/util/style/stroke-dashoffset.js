import { convertToRem } from '../convert-to-rem';
export const normalizeStrokeDashoffset = (strokeDashoffset) => {
    if (!strokeDashoffset || strokeDashoffset === 'none') {
        return 'none'; // Default value
    }
    if (typeof strokeDashoffset === 'number' ||
        /^[\d.]+px$/.test(strokeDashoffset)) {
        return convertToRem(strokeDashoffset);
    }
    return strokeDashoffset.toString();
};
