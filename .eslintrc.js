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
        ecmaVersion: 9
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
        settings: {
            'import/resolver': {
                alias: {
                    map: [
                        ['assets', './src/alias/'],
                        ['axios', '.src/axios/'],
                        ['components', '.src/components'],
                        ['pages', '.src/pages/'],
                        ['state', '.src/state/'],
                        ['consts', '.src/'],
                        ['ContextProvider', '.src/']
                    ],
                    extensions: ['.js', '.jsx', '.png']
                }
            }
        }
    }
};
