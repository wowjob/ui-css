import { convertToRem } from '../convert-to-rem';
export const normalizeTranslate = (translate) => {
    if (!translate || translate === 'none') {
        return 'none'; // Default value
    }
    if (typeof translate === 'number' || /^[\d.]+px$/.test(translate)) {
        return convertToRem(translate);
    }
    return translate;
};
