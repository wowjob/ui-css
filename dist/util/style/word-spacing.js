import { convertToRem } from '../convert-to-rem';
export const normalizeWordSpacing = (wordSpacing) => {
    if (!wordSpacing || wordSpacing === 'normal') {
        return 'normal'; // Default value
    }
    if (typeof wordSpacing === 'number' || /^[\d.]+px$/.test(wordSpacing)) {
        return convertToRem(wordSpacing);
    }
    return wordSpacing.toString();
};
