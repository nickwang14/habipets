module.exports = {
    env: {
        commonjs: true,
        node: true,
        browser: true,
        es6: true,
        jest: true,
    },
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 8
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    plugins: ['eslint-plugin-react'],
    rules: {
        indent: 'error',
        quotes: [2, 'single', 'avoid-escape'],
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
    },
    'settings': {
        'react': {
            'version': 'detect',
        },
    }
};
