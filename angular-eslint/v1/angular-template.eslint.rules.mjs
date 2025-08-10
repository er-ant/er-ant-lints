export const ANGULAR_TEMPLATE_ESLINTRULES = {
  // Basic template rules
  "@angular-eslint/template/no-duplicate-attributes": ["error"],
  "@angular-eslint/template/no-nested-tags": ["error"],
  "@angular-eslint/template/alt-text": ["error"],
  "@angular-eslint/template/banana-in-box": ["error"],
  "@angular-eslint/template/button-has-type": ["error"],
  "@angular-eslint/template/click-events-have-key-events": ["off"],
  "@angular-eslint/template/elements-content": ["error"],
  "@angular-eslint/template/eqeqeq": ["error"],
  "@angular-eslint/template/interactive-supports-focus": ["error"],
  "@angular-eslint/template/label-has-associated-control": ["error"],
  "@angular-eslint/template/mouse-events-have-key-events": ["error"],
  "@angular-eslint/template/no-any": ["off"],
  "@angular-eslint/template/no-autofocus": ["off"],
  "@angular-eslint/template/no-call-expression": ["off"],
  "@angular-eslint/template/no-distracting-elements": ["error"],
  // Not available yet
  // "@angular-eslint/template/no-empty-control-flow": ["error"],
  "@angular-eslint/template/no-inline-styles": ["error", {
    "allowNgStyle": true,
    "allowBindToStyle": true
  }],
  "@angular-eslint/template/no-interpolation-in-attributes": ["error", {
    "allowSubstringInterpolation": true
  }],
  "@angular-eslint/template/no-negated-async": ["error"],
  "@angular-eslint/template/no-positive-tabindex": ["off"],
  "@angular-eslint/template/prefer-at-empty": ["error"],
  "@angular-eslint/template/prefer-contextual-for-variables": ["error"],
  "@angular-eslint/template/prefer-control-flow": ["error"],
  "@angular-eslint/template/prefer-ngsrc": ["error"],
  "@angular-eslint/template/prefer-template-literal": ["error"],
  "@angular-eslint/template/role-has-required-aria": ["error"],
  "@angular-eslint/template/table-scope": ["error"],
  "@angular-eslint/template/valid-aria": ["error"],
  "@angular-eslint/template/prefer-self-closing-tags": ["off"],
  "@angular-eslint/template/prefer-static-string-properties": ["off"],
  // Advanced rules
  "@angular-eslint/template/use-track-by-function": ["off"],
  // Configurable rules
  "@angular-eslint/template/conditional-complexity": ["error", {
    "maxComplexity": 5
  }],
  "@angular-eslint/template/cyclomatic-complexity": ["off", {
    "maxComplexity": 3
  }],
  "@angular-eslint/template/i18n": ["off"],
  "@angular-eslint/template/attributes-order": ["off"],
};
