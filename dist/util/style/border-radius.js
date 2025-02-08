import { convertToRem } from '../convert-to-rem';
import { condensedFour } from '../condensed';
import { getValue } from '../get-value';
import { isPx } from '../is-px';
export const normalizeBorderRadius = (borderRadius) => {
    if (typeof borderRadius === 'string') {
        return borderRadius.toString();
    }
    if (typeof borderRadius === 'number') {
        return convertToRem(borderRadius);
    }
    if (borderRadius === null || borderRadius === undefined) {
        return '0';
    }
    if (Array.isArray(borderRadius)) {
        const values = borderRadius.map((value) => value !== undefined ? convertToRem(getValue(value)) : '0');
        return condensedFour(values);
    }
    if (typeof borderRadius === 'object') {
        const { topLeft = '0', topRight = '0', bottomRight = '0', bottomLeft = '0', } = borderRadius;
        const values = [
            convertToRem(getValue(topLeft)),
            convertToRem(getValue(topRight)),
            convertToRem(getValue(bottomRight)),
            convertToRem(getValue(bottomLeft)),
        ];
        return condensedFour(values);
    }
    return '0';
};
