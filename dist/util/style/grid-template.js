export const normalizeGridTemplate = (value) => {
    if (!value || value === 'none') {
        return 'none'; // Default value
    }
    if (typeof value === 'string') {
        return value;
    }
    if (Array.isArray(value)) {
        const [rows, columns] = value;
        return `${String(rows).trim()} / ${String(columns).trim()}`;
    }
    if (typeof value === 'object') {
        const rows = value.rows
            ? Array.isArray(value.rows)
                ? value.rows.join(' ')
                : value.rows
            : 'none';
        const columns = value.columns
            ? Array.isArray(value.columns)
                ? value.columns.join(' ')
                : value.columns
            : 'none';
        return `${rows} / ${columns}`;
    }
    return value;
};
