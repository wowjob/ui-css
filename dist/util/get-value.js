export const getValue = (value) => value === undefined ||
    value === null ||
    (typeof value === 'string' && value.trim() === '') ||
    value === 0
    ? '0'
    : value;
