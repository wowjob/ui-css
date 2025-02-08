import { convertToRem } from '../convert-to-rem';
export const normalizeOutline = (value) => {
    if (!value) {
        return 'none'; // Default value
    }
    if (typeof value === 'string') {
        return value;
    }
    if (Array.isArray(value)) {
        return value.filter((item) => !!item).join(' ');
    }
    if (typeof value === 'object') {
        const { color = '', style = '', width = '' } = value;
        return [
            color,
            style,
            typeof width === 'number' ? convertToRem(width) : width,
        ]
            .filter(Boolean)
            .join(' ');
    }
    return value;
};
