const ANGULAR_ESLINTRULES = {
  // Basic angular code rules
  "@angular-eslint/contextual-lifecycle": ["error"],
  "@angular-eslint/no-async-lifecycle-method": ["error"],
  "@angular-eslint/no-attribute-decorator": ["error"],
  "@angular-eslint/no-experimental": ["error"],
  "@angular-eslint/require-lifecycle-on-prototype": ["error"],
  "@angular-eslint/sort-lifecycle-methods": ["error"],
  "@angular-eslint/consistent-component-styles": ["off"],
  "@angular-eslint/contextual-decorator": ["error"],
  "@angular-eslint/no-conflicting-lifecycle": ["error"],
  "@angular-eslint/no-duplicates-in-metadata-arrays": ["error"],
  "@angular-eslint/no-empty-lifecycle-method": ["error"],
  "@angular-eslint/no-forward-ref": ["off"],
  "@angular-eslint/no-input-prefix": ["off"],
  "@angular-eslint/no-input-rename": ["off"],
  "@angular-eslint/no-inputs-metadata-property": ["error"],
  "@angular-eslint/no-lifecycle-call": ["error"],
  "@angular-eslint/no-output-native": ["error"],
  "@angular-eslint/no-output-on-prefix": ["off"],
  "@angular-eslint/no-output-rename": ["off"],
  "@angular-eslint/no-outputs-metadata-property": ["error"],
  "@angular-eslint/no-pipe-impure": ["off"],
  "@angular-eslint/no-queries-metadata-property": ["error"],
  "@angular-eslint/prefer-on-push-component-change-detection": ["error"],
  "@angular-eslint/prefer-output-readonly": ["error"],
  "@angular-eslint/relative-url-prefix": ["error"],
  "@angular-eslint/use-component-selector": ["error"],
  "@angular-eslint/use-component-view-encapsulation": ["error"],
  "@angular-eslint/use-lifecycle-interface": ["error"],
  "@angular-eslint/use-pipe-transform-interface": ["error"],
  // i18n rules
  "@angular-eslint/require-localize-metadata": ["off"],
  "@angular-eslint/runtime-localize": ["off"],
  // Signal rules
  "@angular-eslint/no-uncalled-signals": ["error"],
  "@angular-eslint/prefer-output-emitter-ref": ["off"],
  "@angular-eslint/prefer-signals": ["off"],
  // Disputable rules
  "@angular-eslint/no-developer-preview": ["off"],
  "@angular-eslint/component-max-inline-declarations": ["error", {
    template: 50,
    styles: 10
  }],
  "@angular-eslint/prefer-inject": ["off"],
  "@angular-eslint/prefer-standalone": ["off"],
  "@angular-eslint/use-injectable-provided-in": ["off"],
  "@angular-eslint/sort-keys-in-type-decorator": ["error"],
  // Configurable individual rules
  "@angular-eslint/component-class-suffix": ["error", {
    "suffixes": ["Component", "Page"]
  }],
  "@angular-eslint/component-selector": ["error", {
    "type": "element",
    "prefix": "app",
    "style": "kebab-case"
  }],
  "@angular-eslint/directive-class-suffix": ["error", {
    "suffixes": ["Directive"]
  }],
  "@angular-eslint/directive-selector": ["error", {
    "type": "attribute",
    "prefix": "app",
    "style": "camelCase"
  }],
  "@angular-eslint/pipe-prefix": ["error", {
    "prefixes": ["app"]
  }],
}
