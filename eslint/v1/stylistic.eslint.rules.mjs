export const STYLISTIC_ESLINTRULES = {
  // Basic stylistic rules
  "@stylistic/array-bracket-newline": ["error", "consistent"],
  "@stylistic/array-bracket-spacing": ["error", "never", {
    "objectsInArrays": false
  }],
  "@stylistic/array-element-newline": ["error", {
    "consistent": true,
    "multiline": true
  }],
  "@stylistic/arrow-parens": ["error", "as-needed"],
  "@stylistic/arrow-spacing": ["error", {
    "before": true,
    "after": true
  }],
  "@stylistic/block-spacing": ["error"],
  "@stylistic/brace-style": ["error", "1tbs", { "allowSingleLine": true }],
  "@stylistic/comma-dangle": ["error", "always-multiline"],
  "@stylistic/comma-spacing": ["error", {
    "before": false,
    "after": true
  }],
  "@stylistic/comma-style": ["error", "last"],
  "@stylistic/computed-property-spacing": ["error", "never"],
  "@stylistic/curly-newline": ["error", "always"],
  "@stylistic/dot-location": ["error", "property"],
  "@stylistic/eol-last": ["error", "always"],
  "@stylistic/function-call-argument-newline": ["off"],
  "@stylistic/function-call-spacing": ["error", "never"],
  "@stylistic/function-paren-newline": ["error", "multiline"],
  "@stylistic/generator-star-spacing": ["error", {
    "before": false,
    "after": true
  }],
  "@stylistic/implicit-arrow-linebreak": ["error", "beside"],
  "@stylistic/indent-binary-ops": ["error", 2],
  "@stylistic/key-spacing": ["error", { "mode": "strict" }],
  "@stylistic/keyword-spacing": ["error", {
    "before": true,
    "after": true
  }],
  "@stylistic/line-comment-position": ["error", { "position": "above" }],
  "@stylistic/linebreak-style": ["error", "unix"],
  "@stylistic/lines-around-comment": ["off"],
  "@stylistic/lines-between-class-members": ["error", {
    "enforce": [
      { "blankLine": "always", "prev": "field", "next": "method" },
      { "blankLine": "always", "prev": "method", "next": "method" },
    ]
  }],
  "@stylistic/max-statements-per-line": ["error", { "max": 1 }],
  "@stylistic/member-delimiter-style": "error",
  "@stylistic/multiline-comment-style": ["error", "separate-lines", { "checkJSDoc": true }],
  "@stylistic/multiline-ternary": ["error", "always-multiline"],
  "@stylistic/new-parens": "error",
  "@stylistic/no-confusing-arrow": "error",
  "@stylistic/no-extra-parens": ["error", "all", {
    "conditionalAssign": false,
    "returnAssign": false,
    "nestedBinaryExpressions": false,
    "ternaryOperandBinaryExpressions": false
  }],
  "@stylistic/no-extra-semi": "error",
  // "stylistic/no-floating-decimal": "error",
  "@stylistic/no-mixed-operators": "off",
  "@stylistic/no-mixed-spaces-and-tabs": "error",
  "@stylistic/no-multi-spaces": "error",
  "@stylistic/no-multiple-empty-lines": ["error", {
    "max": 2,
    "maxEOF": 1,
    "maxBOF": 1
  }],
  "@stylistic/no-tabs": "error",
  "@stylistic/no-trailing-spaces": "error",
  "@stylistic/no-whitespace-before-property": "error",
  "@stylistic/nonblock-statement-body-position": ["error", "beside"],
  "@stylistic/object-curly-newline": ["error", { "consistent": true, "multiline": true }],
  "@stylistic/object-curly-spacing": ["error", "always"],
  "@stylistic/object-property-newline": ["error", { "allowAllPropertiesOnSameLine": true }],
  "@stylistic/one-var-declaration-per-line": ["error", "always"],
  "@stylistic/operator-linebreak": ["error", "after"],
  // Good rule, but cannot be configured properly
  "@stylistic/padded-blocks": ["off"],
  "@stylistic/padding-line-between-statements": ["error",
    { "blankLine": "always", "prev": ["default", "directive", "if"], "next": "*" },
    { "blankLine": "always", "prev": "*", "next": ["return", "if"] },
    { "blankLine": "always", "prev": "case", "next": "default" }
  ],
  "@stylistic/quote-props": ["error", "as-needed"],
  "@stylistic/quotes": ["error", "single", { "allowTemplateLiterals": false }],
  "@stylistic/rest-spread-spacing": ["error", "never"],
  "@stylistic/semi": ["error", "always"],
  "@stylistic/semi-spacing": "error",
  "@stylistic/semi-style": ["error", "last"],
  "@stylistic/space-before-blocks": "error",
  "@stylistic/space-before-function-paren": ["error", {
    "anonymous": "always",
    "named": "never",
    "asyncArrow": "always"
  }],
  "@stylistic/space-in-parens": ["error", "never"],
  "@stylistic/space-infix-ops": "error",
  "@stylistic/space-unary-ops": "error",
  "@stylistic/spaced-comment": ["error", "always"],
  "@stylistic/switch-colon-spacing": "error",
  "@stylistic/template-curly-spacing": "error",
  "@stylistic/template-tag-spacing": "error",
  // "@stylistic/ts/type-annotation-spacing": "error",
  "@stylistic/type-generic-spacing": "error",
  "@stylistic/type-named-tuple-spacing": "error",
  "@stylistic/wrap-iife": ["error", "outside"],
  "@stylistic/wrap-regex": "error",
  "@stylistic/yield-star-spacing": ["error", "after"],

  // Disputable and configurable code style rules
  "@stylistic/max-len": ["error", {
    "code": 140,
    "tabWidth": 2,
    "comments": 100
  }],
  "@stylistic/newline-per-chained-call": ["error", { "ignoreChainWithDepth": 2 }],
  "@stylistic/indent": ["error", 2, {
    "SwitchCase": 1,
    "MemberExpression": 1,
    "FunctionDeclaration": { "parameters": "first" },
    "FunctionExpression": { "parameters": "first" },
    "CallExpression": { "arguments": "first" },
    "ArrayExpression": 1,
    "ObjectExpression": 1,
    "ImportDeclaration": 1,
    "flatTernaryExpressions": false,
    "ignoreComments": true
  }]
}
