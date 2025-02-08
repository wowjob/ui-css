export const normalizeRubyAlign = (value) => {
    const validValues = [
        'start',
        'center',
        'space-between',
        'space-around',
        'inherit',
        'initial',
        'revert',
        'revert-layer',
        'unset',
    ];
    return validValues.includes(value)
        ? value
        : 'initial'; // Default to 'initial' for invalid values
};
