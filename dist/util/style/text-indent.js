import { convertToRem } from '../convert-to-rem';
export const normalizeTextIndent = (textIndent) => {
    if (!textIndent) {
        return '0'; // Default value
    }
    if (typeof textIndent === 'number' || /^[\d.]+px$/.test(textIndent)) {
        return convertToRem(textIndent);
    }
    return textIndent.toString();
};
