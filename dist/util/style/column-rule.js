import { convertToRem } from '../convert-to-rem';
import { isPx } from '../is-px';
export const normalizeColumnRule = (columnRule) => {
    if (!columnRule) {
        return ''; // Default empty value
    }
    if (typeof columnRule === 'string') {
        return columnRule;
    }
    if (typeof columnRule === 'object') {
        const { color = '', style = '', width = '' } = columnRule;
        const normalizedWidth = (typeof width === 'string' && isPx(width)) || typeof width === 'number'
            ? convertToRem(width)
            : width;
        return [normalizedWidth, style, color].filter(Boolean).join(' ');
    }
    return columnRule;
};
