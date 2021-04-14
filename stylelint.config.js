module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-prettier',
        'stylelint-order-config-yandex',
    ],
    plugins: ['stylelint-scss', 'stylelint-order'],
    rules: {
        'at-rule-no-unknown': null,
    },
};
