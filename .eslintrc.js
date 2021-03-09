module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
    ],
    globals: {
        qq: 'qq',
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'linebreak-style': 0,
        'indent': [2, 4],
        'radix': ['error', 'as-needed'],
        'import/no-extraneous-dependencies': ['error', {
            optionalDependencies: ['test/unit/index.js'],
        }],
        'import/extensions': ['error', 'always', {
            js: 'never',
            vue: 'never',
        }],
        'object-shorthand': ['error', 'methods'],
        'no-restricted-syntax': 0,
        'no-unused-expressions': ['error', {allowShortCircuit: true}],
        'no-bitwise': ['error', {allow: ['~']}],
        'no-param-reassign': 0,
        'no-console': 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'max-len': ['error', {code: 1200}],
        'no-plusplus': 0,
        'no-unused-vars': 0,
        'import/prefer-default-export': 0,
        'vue/valid-v-model': 1,
        'no-cond-assign': 1,
        'array-callback-return': 0,
        'no-void': 0,
        'no-unsafe-finally': 0,
        'no-continue': 0,
        'prefer-destructuring': 0,
        'no-nested-ternary': 0,
        'consistent-return': 0,
        'object-curly-newline': 0,
        'guard-for-in': 0,
        "padding-line-between-statements": [
            "warn",
            { "blankLine": "always", "prev": ["const", "let", "var"], "next": "*" },
            { "blankLine": "any", "prev": ["const", "let", "var"], "next": ["const", "let", "var"] },
            { "blankLine": "always", "prev": "*", "next": "return" },
            { "blankLine": "always", "prev": "block-like", "next": "*" },
            { "blankLine": "always", "prev": "block", "next": "*" },
            { "blankLine": "always", "prev": "function", "next": "*" },
        ],
    },
};