import { convertToRem } from '../convert-to-rem';
export const normalizeFontSize = (fontSize) => {
    if (!fontSize) {
        return 'medium'; // Default value
    }
    if (typeof fontSize === 'number' || /^[\d.]+px$/.test(fontSize)) {
        return convertToRem(fontSize);
    }
    return fontSize.toString();
};
