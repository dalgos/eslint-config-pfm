module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'node': true,
    'jest': true,
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    'react-hooks',
    '@typescript-eslint/eslint-plugin',
    'jest',
    'eslint-plugin-tsdoc'
  ],
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  'rules': {
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: false,
        types: {
          String: {
            message: 'Use `string` instead.',
            fixWith: 'string'
          },
          Number: {
            message: 'Use `number` instead.',
            fixWith: 'number'
          },
          Boolean: {
            message: 'Use `boolean` instead.',
            fixWith: 'boolean'
          },
          Symbol: {
            message: 'Use `symbol` instead.',
            fixWith: 'symbol'
          },
          Object: {
            message: 'The `Object` type is mostly the same as `unknown`. You probably want `Record<string, unknown>` instead. See https://github.com/typescript-eslint/typescript-eslint/pull/848',
            fixWith: 'Record<string, unknown>'
          },
          '{}': {
            message: 'The `{}` type is mostly the same as `unknown`. You probably want `Record<string, unknown>` instead.',
            fixWith: 'Record<string, unknown>'
          },
          object: {
            message: 'The `object` type is hard to use. Use `Record<string, unknown>` instead. See: https://github.com/typescript-eslint/typescript-eslint/pull/848',
            fixWith: 'Record<string, unknown>'
          },
          Function: 'Use a specific function type instead, like `() => void`.',

          // TODO: Try to enable this in 2021.
          // null: {
          // 	message: 'Use `undefined` instead. See: https://github.com/sindresorhus/meta/issues/7',
          // 	fixWith: 'undefined'
          // }

          Omit: 'Prefer the `Except` type in the `type-fest` package instead as it\'s stricter.'
        }
      }
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    "eol-last": [2, "always"],
    // 'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'block-scoped-var': 'warn',
    'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
    'camelcase': ['error', { 'properties': 'always' }],
    'comma-dangle': ['error', 'only-multiline'],
    'comma-style': ['error', 'last'],
    'comma-spacing': 'off',
    'curly': 'error',
    'eqeqeq': 'warn',
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'jsx-quotes': ['error', 'prefer-double'],
    'keyword-spacing': ['error', { 'before': true, 'after': true }],
    'newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 2 }],
    'no-alert': 0,
    'no-array-constructor': 'off',
    'no-console': ['warn', { allow: ['error', 'warn'] }],
    'no-const-assign': 'error',
    'no-debugger': 'error',
    'no-dupe-class-members': 'off',
    'no-duplicate-imports': 'error',
    'no-empty': 'warn',
    'no-empty-function': 'off',
    'no-inline-comments': 'warn',
    'no-loop-func': 'error',
    'no-multi-spaces': 'error',
    'no-new': 'error',
    'no-spaced-func': 'warn',
    'no-trailing-spaces': 'error',
    'no-undefined': 'warn',
    'no-undef': 'error',
    'no-unused-expressions': ['error', { 'allowShortCircuit': true, 'allowTernary': true }],
    'no-unused-vars': 'warn',
    'no-use-before-define': ['error', { 'functions': false }],
    'no-var': 'error',
    'object-curly-spacing': ['warn', 'always'],
    'object-shorthand': 'error',
    'padding-line-between-statements': ['error',
      { 'blankLine': 'always', 'prev': '*', 'next': 'return' },
      { 'blankLine': 'always', 'prev': ['const', 'let', 'var'], 'next': '*' },
      { 'blankLine': 'any', 'prev': ['const', 'let', 'var'], 'next': ['const', 'let', 'var'] },
      { 'blankLine': 'always', 'prev': 'directive', 'next': '*' },
      { 'blankLine': 'any', 'prev': 'directive', 'next': 'directive' },
    ],
    'semi': [2, 'always'],
    'semi-spacing': ['error', { 'before': false, 'after': true }],
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', { 'anonymous': 'always', 'named': 'never' }],
    'space-infix-ops': ['error'],
    'switch-colon-spacing': ['error', { 'after': true, 'before': false }],
    'react/jsx-uses-vars': "error",
    'react/jsx-curly-spacing': ['error', 'never'],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-no-bind': ['error', {
      'ignoreRefs': true,
      'allowArrowFunctions': false,
      'allowFunctions': false,
      'allowBind': false,
      'ignoreDOMComponents': false,
    }],
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react/jsx-max-props-per-line': [2, { 'maximum': 1 }],
    'react/jsx-indent-props': [2, 2],
    'strict': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'tsdoc/syntax': 'warn',
    '@typescript-eslint/comma-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-dupe-class-members': 'error',
    '@typescript-eslint/no-dynamic-delete': 'error',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true
      }
    ],
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
  },
  'settings': {
    'react': {
      'version': 'detect'
    },
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx'
        ]
      }
    },
    'import/parsers': {
      '@typescript-eslint/parser': [
        '.ts',
        '.tsx'
      ]
    }
  }
};
