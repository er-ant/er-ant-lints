export const TS_ESLINTRULES = {
  // Basic rules
  "@typescript-eslint/adjacent-overload-signatures": "error",
  "@typescript-eslint/array-type": ["error", {
    "default": "generic"
  }],
  "@typescript-eslint/await-thenable": "error",
  "@typescript-eslint/ban-ts-comment": "error",
  "@typescript-eslint/ban-tslint-comment": "error",
  "@typescript-eslint/class-literal-property-style": ["error", "fields"],
  "@typescript-eslint/class-methods-use-this": "off",
  "@typescript-eslint/consistent-generic-constructors": "error",
  "@typescript-eslint/consistent-indexed-object-style": "off",
  "@typescript-eslint/consistent-return": "off",
  "@typescript-eslint/consistent-type-assertions": "error",
  "@typescript-eslint/consistent-type-definitions": "error",
  "@typescript-eslint/consistent-type-exports": "error",
  "@typescript-eslint/consistent-type-imports": "off",
  "default-param-last": "off",
  "@typescript-eslint/default-param-last": "error",
  "dot-notation": "off",
  "@typescript-eslint/dot-notation": ["error", {
    "allowPrivateClassPropertyAccess": true,
    "allowProtectedClassPropertyAccess": true,
    "allowIndexSignaturePropertyAccess": true,
  }],
  "@typescript-eslint/explicit-function-return-type": ["error"],
  "@typescript-eslint/explicit-member-accessibility": ["error", {
    "accessibility": "no-public"
  }],
  // Not needed as explicit-function-return-type does same but better
  "@typescript-eslint/explicit-module-boundary-types": "off",
  "@typescript-eslint/init-declarations": "off",
  "@typescript-eslint/method-signature-style": ["error", "property"],
  "no-array-constructor": "off",
  "@typescript-eslint/no-array-constructor": "error",
  "@typescript-eslint/no-array-delete": "error",
  "@typescript-eslint/no-base-to-string": "error",
  "@typescript-eslint/no-confusing-non-null-assertion": "error",
  "@typescript-eslint/no-confusing-void-expression": ["error", {
    "ignoreArrowShorthand": true,
  }],
  // TS handled code style rules
  "@typescript-eslint/no-dupe-class-members": "off",
  // Add eslint disable if you need to provide backward compatibility
  "@typescript-eslint/no-duplicate-enum-values": "error",
  "@typescript-eslint/no-duplicate-type-constituents": "error",
  "@typescript-eslint/no-dynamic-delete": "error",
  "@typescript-eslint/no-empty-function": "off",
  "@typescript-eslint/no-empty-object-type": "off",
  "@typescript-eslint/no-extra-non-null-assertion": "error",
  // Good rule, can be configured too
  "@typescript-eslint/no-extraneous-class": "off",
  "@typescript-eslint/no-floating-promises": "error",
  "@typescript-eslint/no-for-in-array": "error",
  "no-implied-eval": "off",
  "@typescript-eslint/no-implied-eval": "error",
  "@typescript-eslint/no-import-type-side-effects": "error",
  "@typescript-eslint/no-inferrable-types": "off",
  // TS handled code style rules
  "no-invalid-this": "off",
  "@typescript-eslint/no-invalid-this": "off",
  "@typescript-eslint/no-invalid-void-type": "error",
  "no-loop-func": "off",
  "@typescript-eslint/no-loop-func": "error",
  // Unfortunately this rule is too strict for my projects
  "no-magic-numbers": "off",
  "@typescript-eslint/no-magic-numbers": ["off", {
    "ignoreArrayIndexes": true,
    "ignoreDefaultValues": true,
    "ignoreClassFieldInitialValues": true,
    "enforceConst": true,
    "ignoreEnums": true,
    "ignoreNumericLiteralTypes": true,
    "ignoreReadonlyClassProperties": true,
    "ignoreTypeIndexes": true
  }],
  "@typescript-eslint/no-meaningless-void-operator": "error",
  "@typescript-eslint/no-misused-new": "error",
  "@typescript-eslint/no-misused-promises": "error",
  "@typescript-eslint/no-misused-spread": "error",
  "@typescript-eslint/no-mixed-enums": "error",
  "@typescript-eslint/no-namespace": "error",
  "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
  "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
  // No for now
  // https://stackoverflow.com/questions/65802194/should-we-use-non-null-assertion-or-optional-chaining-in-typescript
  "@typescript-eslint/no-non-null-assertion": "off",
  "no-redeclare": "off",
  "@typescript-eslint/no-redeclare": "error",
  "@typescript-eslint/no-redundant-type-constituents": "error",
  "@typescript-eslint/no-require-imports": "error",
  "no-shadow": "off",
  "@typescript-eslint/no-shadow": ["error", {
    "builtinGlobals": false,
    "hoist": "functions-and-types",
    "allow": [],
    "ignoreOnInitialization": false,
    "ignoreTypeValueShadow": false,
    "ignoreFunctionTypeParameterNameValueShadow": true
  }],
  "@typescript-eslint/no-this-alias": "error",
  // If you need strict typecheck for boolean you can disable. Don't forget 'strictNullChecks' config.
  "@typescript-eslint/no-unnecessary-boolean-literal-compare": "off",
  // Doesn't work without strictNullChecks
  "@typescript-eslint/no-unnecessary-condition": "off",
  "@typescript-eslint/no-unnecessary-parameter-property-assignment": "error",
  "@typescript-eslint/no-unnecessary-qualifier": "error",
  "@typescript-eslint/no-unnecessary-template-expression": "error",
  "@typescript-eslint/no-unnecessary-type-arguments": "error",
  "@typescript-eslint/no-unnecessary-type-assertion": "error",
  "@typescript-eslint/no-unnecessary-type-constraint": "error",
  "@typescript-eslint/no-unnecessary-type-conversion": "error",
  "@typescript-eslint/no-unnecessary-type-parameters": "off",
  // Start: Any can be used as temporary solution and future refactoring. But you should avoid using any everywhere.
  "@typescript-eslint/no-unsafe-argument": "off",
  "@typescript-eslint/no-unsafe-assignment": "off",
  "@typescript-eslint/no-unsafe-call": "off",
  "@typescript-eslint/no-unsafe-member-access": "off",
  "@typescript-eslint/no-unsafe-return": "off",
  // End
  "@typescript-eslint/no-unsafe-declaration-merging": "error",
  "@typescript-eslint/no-unsafe-enum-comparison": "error",
  "@typescript-eslint/no-unsafe-function-type": "error",
  // It makes types more narrow and doesn't allow you to typecast
  "@typescript-eslint/no-unsafe-type-assertion": "off",
  "@typescript-eslint/no-unsafe-unary-minus": "error",
  "no-unused-expressions": "off",
  "@typescript-eslint/no-unused-expressions": "error",
  "no-unused-vars": "off",
  "@typescript-eslint/no-unused-vars": "error",
  "no-use-before-define": "off",
  "@typescript-eslint/no-use-before-define": "error",
  // I feel ok with constructor placeholder
  "@typescript-eslint/no-useless-constructor": "off",
  "@typescript-eslint/no-useless-empty-export": "error",
  "@typescript-eslint/no-wrapper-object-types": "error",
  "@typescript-eslint/non-nullable-type-assertion-style": "error",
  "no-throw-literal": "off",
  "@typescript-eslint/only-throw-error": "error",
  "@typescript-eslint/parameter-properties": "off",
  // You should use const variables instead of this
  "@typescript-eslint/prefer-as-const": "off",
  "@typescript-eslint/prefer-enum-initializers": "error",
  "@typescript-eslint/prefer-for-of": "off",
  "@typescript-eslint/prefer-find": "error",
  "@typescript-eslint/prefer-function-type": "error",
  "@typescript-eslint/prefer-includes": "error",
  "@typescript-eslint/prefer-literal-enum-member": "error",
  // Don't use namespaces and modules in modern TS!!
  "@typescript-eslint/prefer-namespace-keyword": "off",
  "@typescript-eslint/prefer-optional-chain": "error",
  "prefer-promise-reject-errors": "off",
  "@typescript-eslint/prefer-promise-reject-errors": "error",
  "@typescript-eslint/prefer-readonly": "error",
  "@typescript-eslint/prefer-readonly-parameter-types": "off",
  "@typescript-eslint/prefer-reduce-type-parameter": "off",
  "@typescript-eslint/prefer-regexp-exec": "error",
  "@typescript-eslint/prefer-return-this-type": "error",
  "@typescript-eslint/prefer-string-starts-ends-with": ["error", {
    "allowSingleElementEquality": "always"
  }],
  "@typescript-eslint/promise-function-async": "error",
  "@typescript-eslint/related-getter-setter-pairs": "error",
  "@typescript-eslint/require-array-sort-compare": ["error", {
    "ignoreStringArrays": true
  }],
  "require-await": "off",
  "@typescript-eslint/require-await": "error",
  "@typescript-eslint/restrict-plus-operands": "error",
  "@typescript-eslint/restrict-template-expressions": "error",
  "@typescript-eslint/return-await": ["error", "always"],
  // Doesn't work without strictNullChecks
  "@typescript-eslint/strict-boolean-expressions": "off",
  "@typescript-eslint/switch-exhaustiveness-check": "off",
  "@typescript-eslint/triple-slash-reference": "error",
  "@typescript-eslint/unbound-method": "off",
  "@typescript-eslint/unified-signatures": "error",
  // You shouldn't use unknow and any anyway. Any is good for temporary solution
  "@typescript-eslint/use-unknown-in-catch-callback-variable": "error",

  // Disputable and configurable code style rules
  "max-params": "off",
  "@typescript-eslint/max-params": ["error", {
    "countVoidThis": false,
    "max": 6
  }],
  // Eslint marked this rule as frozen due to hard maintanability
  "@typescript-eslint/member-ordering": "off",
  // Eslint marked this rule as frozen due to hard maintanability
  "@typescript-eslint/naming-convention": "off",
  "@typescript-eslint/no-deprecated": "error",
  // Any is ok, because it is like a placeholder for future refactoring
  "@typescript-eslint/no-explicit-any": "off",
  "no-restricted-imports": "off",
  "@typescript-eslint/no-restricted-imports": "off",
  "@typescript-eslint/no-restricted-types": "off",
  "@typescript-eslint/prefer-destructuring": "off",
  "@typescript-eslint/prefer-nullish-coalescing": "off"
}
