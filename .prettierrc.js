module.exports = {
    trailingComma: 'all',
    tabWidth: 4,
    printWidth: 120,
    singleQuote: true,

    overrides: [
        {
            files: '*.json',
            options: {
                tabWidth: 2,
            },
        },
    ],
};
