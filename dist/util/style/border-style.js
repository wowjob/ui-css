import { condensedFour } from '../condensed';
export const normalizeBorderStyle = (style) => {
    if (Array.isArray(style)) {
        if (style.length === 0) {
            return 'none';
        }
        return condensedFour(style.map((value) => value || 'none'));
    }
    return style || 'none';
};
