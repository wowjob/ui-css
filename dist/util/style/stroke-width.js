import { convertToRem } from '../convert-to-rem';
export const normalizeStrokeWidth = (strokeWidth) => {
    if (strokeWidth === null || strokeWidth === undefined) {
        return '0'; // Default value
    }
    if (typeof strokeWidth === 'number' || /^[\d.]+px$/.test(strokeWidth)) {
        return convertToRem(strokeWidth);
    }
    return strokeWidth.toString();
};
