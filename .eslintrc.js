module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'plugin:no-use-extend-native/recommended',
        'plugin:nuxt/recommended',
        'plugin:prettier/recommended',
        'plugin:promise/recommended',
        'plugin:sonarjs/recommended',
        'prettier',
    ],
    plugins: [
        'no-use-extend-native',
        'optimize-regex',
        'prettier',
        'promise',
        'sonarjs',
    ],
    rules: {
        'optimize-regex/optimize-regex': 'warn',
        'sonarjs/cognitive-complexity': ['error', 30],
    },
};
