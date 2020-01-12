module.exports = {
    parser: 'babel-eslint',

    plugins: [
        // prettier-ignore
        'import',
        'simple-import-sort',
        'prettier',
    ],

    extends: [
        // prettier-ignore
        'plugin:prettier/recommended',
        // 'plugin:import/errors',
        // 'plugin:import/warnings',
        'airbnb-base',
    ],

    env: { es6: true, node: true },

    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },

    globals: {
        __DEV__: true,
        __dirname: true,
        fetch: true,
    },

    rules: {
        'indent': ['error', 4], // prettier-ignore
        'max-len': ['error', 120],
        'prettier/prettier': 'error',
        'curly': ['error', 'all'], // prettier-ignore
        'import/order': 'off',
        'simple-import-sort/sort': 'error',

        'class-methods-use-this': 'off',
        'no-param-reassign': 'off',
        'arrow-parens': 'off',
        'import/prefer-default-export': 'off',
    },
};
