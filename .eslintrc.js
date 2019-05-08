/**
 * This file is part of taro-boilerplate.
 * @link     : https://zhaiyiming.com/
 * @author   : Emil Zhai (root@derzh.com)
 * @modifier : Emil Zhai (root@derzh.com)
 * @copyright: Copyright (c) 2018 TINYMINS.
 */
const path = require('path');

const resolve = s => path.join(__dirname, s);

// http://eslint.org/docs/user-guide/configuring
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    useJSXTextNode: true,
    project: './tsconfig.json'
  },
  extends: [
    'taro',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@/', resolve('src/')],
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      }
    },
  },
    // add your custom rules here
  'rules': {
    // eslint rules
    'accessor-pairs': 'error',
    'array-bracket-newline': 'error',
    'array-bracket-spacing': 'error',
    'array-callback-return': 'error',
    'array-element-newline': 'off',
    'arrow-body-style': 'error',
    'arrow-parens': 'error',
    'arrow-spacing': 'error',
    'block-scoped-var': 'error',
    'block-spacing': 'error',
    'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
    'callback-return': 'off',
    'camelcase': ['error', { 'properties': 'always' }],
    'capitalized-comments': 'error',
    'class-methods-use-this': 'off',
    'comma-dangle': 'error',
    'comma-spacing': 'error',
    'comma-style': 'error',
    'complexity': ['error', { 'max': 50 }],
    'computed-property-spacing': 'error',
    'consistent-return': 'error',
    'consistent-this': 'off',
    'constructor-super': 'error',
    'curly': 'error',
    'default-case': 'error',
    'dot-location': 'error',
    'dot-notation': 'error',
    'eol-last': 'error',
    'eqeqeq': 'error',
    'for-direction': 'error',
    'func-call-spacing': 'error',
    'func-name-matching': 'error',
    'func-names': 'error',
    'func-style': 'error',
    'function-paren-newline': ['error', 'consistent'],
    'generator-star-spacing': 'error',
    // 'generator-star': 'error', // replaced by: generator-star-spacing
    'getter-return': 'error',
    'global-require': 'error',
    // 'global-strict': 'error', // strict
    'guard-for-in': 'error',
    'handle-callback-err': 'error',
    'id-blacklist': 'error',
    'id-length': 'off',
    'id-match': ['error', '^(?:\\${0,1}[a-zA-Z0-9]*||[A-Z_0-9]+)$', {
      'properties': true,
      'propertiesPattern': '^(?:\\${0,1}[a-z]+[a-zA-Z0-9]*||[A-Z_0-9]+)$',
      'onlyDeclarations': true,
      'errorMessage': 'Identifier \'{{name}}\' in not in lower camelcase.',
    }],
    'implicit-arrow-linebreak': 'off',
    // 'indent-legacy': ['error', 2], // replaced by: indent
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'init-declarations': 'off',
    'jsx-quotes': 'error',
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'line-comment-position': 'off',
    'linebreak-style': 'error',
    'lines-around-comment': 'off',
    'lines-around-directive': 'error',
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'max-classes-per-file': 'error',
    'max-depth': 'error',
    'max-len': ['error', {
      'code': 140,
      'ignoreTrailingComments': true,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true,
      'ignoreUrls': true,
      'ignoreComments': true
    }],
    'max-lines-per-function': 'off',
    'max-lines': 'off',
    'max-nested-callbacks': 'error',
    'max-params': ['error', 8],
    'max-statements-per-line': ['error', { 'max': 2 }],
    'max-statements': 'off',
    'multiline-comment-style': 'off',
    'multiline-ternary': ['error', 'always-multiline'],
    'new-cap': 'error',
    'new-parens': 'error',
    'newline-after-var': 'off',
    'newline-before-return': 'off',
    'newline-per-chained-call': 'error',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    // 'no-arrow-condition': 'error', // replaced by: no-confusing-arrow, no-constant-condition
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-bitwise': 'error',
    'no-buffer-constructor': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-catch-shadow': 'error',
    'no-class-assign': 'error',
    // 'no-comma-dangle': 'error', // replaced by: comma-dangle
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-confusing-arrow': 'error',
    'no-console': 'error',
    'no-const-assign': 'error',
    'no-constant-condition': 'error',
    'no-continue': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-div-regex': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-else-return': 'error',
    'no-empty-character-class': 'error',
    // 'no-empty-class': 'error', // replaced by: no-empty-character-class
    'no-empty-function': 'error',
    // 'no-empty-label': 'error', // replaced by: no-labels
    'no-empty-pattern': 'error',
    'no-empty': ['error', { 'allowEmptyCatch': true }],
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-label': 'error',
    'no-extra-parens': 'error',
    'no-extra-semi': 'error',
    // 'no-extra-strict': 'error', // replaced by: strict
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-inline-comments': 'off',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-invalid-this': 'off',
    'no-irregular-whitespace': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    'no-misleading-character-class': 'error',
    'no-mixed-operators': 'error',
    'no-mixed-requires': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': 'error',
    'no-native-reassign': 'error',
    'no-negated-condition': 'error',
    'no-negated-in-lhs': 'error',
    'no-nested-ternary': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-new': 'error',
    'no-obj-calls': 'error',
    'no-octal-escape': 'error',
    'no-octal': 'error',
    'no-param-reassign': 'error',
    'no-path-concat': 'error',
    'no-plusplus': 'error',
    'no-process-env': 'off',
    'no-process-exit': 'error',
    'no-proto': 'error',
    'no-prototype-builtins': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    // 'no-reserved-keys': 'error', // replaced by: quote-props
    'no-restricted-globals': 'error',
    'no-restricted-imports': ['error', {
      'paths': ['lodash'],
    }],
    'no-restricted-modules': 'error',
    'no-restricted-properties': 'error',
    'no-restricted-syntax': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow-restricted-names': 'error',
    'no-shadow': ['error', { allow: ['_'] }],
    // 'no-space-before-semi': 'error', // replaced by: semi-spacing
    'no-spaced-func': 'error',
    'no-sparse-arrays': 'error',
    'no-sync': 'error',
    'no-tabs': 'error',
    'no-template-curly-in-string': 'error',
    'no-ternary': 'off',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef-init': 'error',
    'no-undef': 'error',
    'no-undefined': 'error',
    'no-underscore-dangle': ['error', {
      'allow': ['_uid', '_componentTag', '__INITIAL_STATE__'],
      'allowAfterThis': true,
    }],
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-unused-vars': ['error', { 'varsIgnorePattern': 'Taro' }],
    'no-use-before-define': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'off',
    'no-warning-comments': 'off',
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    // 'no-wrap-func': 'error', // replaced by: no-extra-parens
    'nonblock-statement-body-position': 'error',
    'object-curly-newline': ['error', { 'consistent': true }],
    'object-curly-spacing': 'error',
    'object-property-newline': 'error',
    'object-shorthand': 'error',
    'one-var-declaration-per-line': ['error', 'initializations'],
    'one-var': ['error', { 'initialized': 'never' }],
    'operator-assignment': 'error',
    'operator-linebreak': 'error',
    'padded-blocks': 'error',
    'padding-line-between-statements': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'off',
    'prefer-named-capture-group': 'off', // es6 does not support capture group
    'prefer-numeric-literals': 'error',
    'prefer-object-spread': 'off',
    'prefer-promise-reject-errors': 'error',
    'prefer-reflect': 'off',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quote-props': 'error',
    'quotes': 'error',
    'radix': 'error',
    'require-atomic-updates': 'error',
    'require-await': 'error',
    'require-jsdoc': 'error',
    'require-unicode-regexp': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': 'error',
    'semi-spacing': 'error',
    'semi-style': 'error',
    'semi': 'error',
    'sort-imports': 'off',
    'sort-keys': 'off',
    'sort-vars': 'error',
    // 'space-after-function-name': 'error', // replaced by: space-before-function-paren
    // 'space-after-keywords': 'error', // replaced by: keyword-spacing
    'space-before-blocks': 'error',
    'space-before-function-paren': 'error',
    // 'space-before-function-parentheses': 'error', // replaced by: space-before-function-paren
    // 'space-before-keywords': 'error', // replaced by: keyword-spacing
    // 'space-in-brackets': 'error', // replaced by: object-curly-spacing, array-bracket-spacing, computed-property-spacing
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    // 'space-return-throw-case': 'error', // replaced by: keyword-spacing
    'space-unary-ops': 'error',
    // 'space-unary-word-ops': 'error', // replaced by: space-unary-ops
    'spaced-comment': 'error',
    // 'spaced-line-comment': 'error', // replaced by: spaced-comment
    'strict': 'error',
    'switch-colon-spacing': 'error',
    'symbol-description': 'error',
    'template-curly-spacing': 'error',
    'template-tag-spacing': 'error',
    'unicode-bom': 'error',
    'use-isnan': 'error',
    'valid-jsdoc': 'error',
    'valid-typeof': 'error',
    'vars-on-top': 'error',
    'wrap-iife': 'error',
    'wrap-regex': 'error',
    'yield-star-spacing': 'error',
    'yoda': 'error',

    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'ts': 'never',
      'tsx': 'never',
      'tx': 'never',
      'vue': 'never'
    }],
    // 'import/no-cycle': ['error', { maxDepth: 1 }],
    'import/no-cycle': 'off',
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow single export
    'import/prefer-default-export': 'off',

    // typescript lints
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/ban-ts-ignore': 'error',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/class-name-casing': 'error',
    '@typescript-eslint/explicit-function-return-type': ['error', { 'allowExpressions': true }],
    '@typescript-eslint/explicit-member-accessibility': 'error',
    '@typescript-eslint/generic-type-naming': 'error',
    '@typescript-eslint/indent': ['error', 2, { 'SwitchCase': 1 }],
    '@typescript-eslint/interface-name-prefix': 'error',
    '@typescript-eslint/member-delimiter-style': 'error',
    '@typescript-eslint/member-naming': 'error',
    '@typescript-eslint/member-ordering': 'off',
    '@typescript-eslint/no-angle-bracket-type-assertion': 'error',
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-object-literal-type-assertion': 'error',
    '@typescript-eslint/no-parameter-properties': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-triple-slash-reference': 'error',
    '@typescript-eslint/no-type-alias': ['error', { 'allowAliases': 'in-unions' }],
    // '@typescript-eslint/no-unnecessary-qualifier': 'error',
    // '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { 'varsIgnorePattern': 'Taro' }],
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-interface': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/promise-function-async': 'off',
    // '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/type-annotation-spacing': 'error',

    // react
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx', '.tsx'] }]
  }
}
