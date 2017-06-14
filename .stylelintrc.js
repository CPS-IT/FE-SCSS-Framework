module.exports = {
    extends: 'stylelint-config-standard',
    plugins: [
        'stylelint-order'
    ],
    rules: {
        'indentation': 4,
        'string-quotes': 'single',
        'no-duplicate-selectors': true,
        'color-hex-case': 'lower',
        'color-hex-length': 'long',
        'color-named': 'never',
        'selector-no-id': true,
        'selector-combinator-space-after': 'always',
        'selector-attribute-quotes': 'always',
        'selector-attribute-operator-space-before': 'never',
        'selector-attribute-operator-space-after': 'never',
        'selector-attribute-brackets-space-inside': 'never',
        'declaration-block-trailing-semicolon': 'always',
        'declaration-no-important': null,
        'declaration-colon-space-before': 'never',
        'declaration-colon-space-after': 'always',
        'property-no-vendor-prefix': true,
        'value-no-vendor-prefix': true,
        'number-leading-zero': 'always',
        'function-url-quotes': 'always',
        'font-weight-notation': 'numeric',
        'font-family-name-quotes': 'always-unless-keyword',
        'comment-whitespace-inside': 'always',
        'comment-empty-line-before': 'always',
        'at-rule-no-vendor-prefix': true,
        'at-rule-empty-line-before': null,
        'rule-empty-line-before': ['always', {
            except: [
                'first-nested',
                'after-single-line-comment'
            ]
        }],
        'selector-pseudo-element-colon-notation': 'single',
        'selector-pseudo-class-parentheses-space-inside': 'never',
        'selector-no-vendor-prefix': true,
        'block-closing-brace-newline-after': ['always', {
            ignoreAtRules: [
                'if',
                'else'
            ]
        }],
        'media-feature-range-operator-space-before': 'always',
        'media-feature-range-operator-space-after': 'always',
        'media-feature-parentheses-space-inside': 'never',
        'media-feature-name-no-vendor-prefix': true,
        'media-feature-colon-space-before': 'never',
        'media-feature-colon-space-after': 'always',
        'order/properties-alphabetical-order': true
    }
}
