import js from '@eslint/js'
import globals from 'globals'
import stylistic from '@stylistic/eslint-plugin'

export default [
    js.configs.recommended,
    {
        plugins: {
            '@stylistic': stylistic,
        },
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.node,
                ...globals.jest,
            },
        },
        rules: {
            '@stylistic/indent': ['error', 4],
            '@stylistic/object-curly-spacing': ["error", "always"],
            'array-callback-return': 'off',
            'comma-dangle': ['error', 'always-multiline'],
            'max-len': [
                'error',
                {
                    code: 160,
                    ignoreStrings: true,
                    ignoreTemplateLiterals: true,
                },
            ],
            'no-console': 'off',
            'no-use-before-define': ['error', { functions: false }],
            'semi': ['error', 'never'],
            'strict': 'off', // Not needed with ES modules
        },
    },
]
