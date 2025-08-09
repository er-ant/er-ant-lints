# er-ant-lints: angular-eslint
Version control here is separated into folders with versions, below versions compatibility:
- v1 is based on eslint v9.x.x, typescript-eslint v8.x.x, @stylistic/eslint-plugin v4.x.x and angular-eslint v20.x.x

You can find working example config in respective folder with version.

## Individual rules
For best linting experience, please configure next rules in your `eslint.config.mjs`:

**\*.ts files config part**
```
  "@angular-eslint/component-selector": ["error", {
    "type": "element",
    "prefix": "app", <-- use your app prefix
    "style": "kebab-case"
  }],
  "@angular-eslint/directive-selector": ["error", {
    "type": "attribute",
    "prefix": "app", <-- use your app prefix
    "style": "camelCase"
  }],
  "@angular-eslint/pipe-prefix": ["error", {
    "prefixes": ["app"] <-- use your app prefix
  }],
```
