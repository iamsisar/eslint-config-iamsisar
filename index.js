module.exports = {
    'parserOptions': {
        ecmaVersion: 2017,
        'parser': 'babel-eslint',
        experimentalDecorators: true
    },
    'extends': [
        'standard',
        'plugin:vue/recommended'
    ],
    'env': {
        'jquery': true,
        'jest': true
    },
    'rules': {
        // semistandard
        'semi': ['error', 'always'],
        'no-extra-semi': 'error',

        // coding style
        'indent': ['error', 4],
        'space-before-function-paren': ['error', {
            'anonymous': 'ignore',
            'named': 'ignore',
            'asyncArrow': 'always'
        }],

        // vue
        'vue/no-duplicate-attributes': 2,
        'vue/html-quotes': ['error'],
        'vue/html-indent': ['error', 4, {
            alignAttributesVertically: false
        }],
        'vue/html-self-closing': ['error', {
            'html': {
                'void': 'always',
                'normal': 'never',
                'component': 'always'
            },
            'svg': 'always',
            'math': 'always'
        }],
        'vue/attribute-hyphenation': ['error', 'always'],
        'vue/max-attributes-per-line': [1, {
            'singleline': {
                'max': 3,
                'allowFirstLine': true
            },
            'multiline': {
                'max': 1,
                'allowFirstLine': true
            }
        }],
        'vue/mustache-interpolation-spacing': ['error', 'always'],
        'vue/order-in-components': ['error'],
        'vue/require-prop-types': ['error'],
        'vue/v-bind-style': ['error', 'longform'],
        'vue/v-on-style': ['error', 'longform']
    }
};
