// @ts-check
import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import angularESlint from 'angular-eslint';

import { ESLINTRULES } from 'er-ant-lints/eslint/v1/eslint.rules.mjs';
import { STYLISTIC_ESLINTRULES } from 'er-ant-lints/eslint/v1/stylistic.eslint.rules.mjs';
import { TS_ESLINTRULES } from 'er-ant-lints/eslint/v1/ts-eslint.rules.mjs';
import { ANGULAR_ESLINTRULES } from 'er-ant-lints/angular-eslint/v1/angular.eslint.rules.mjs';
import { ANGULAR_TEMPLATE_ESLINTRULES } from 'er-ant-lints/angular-eslint/v1/angular-template.eslint.rules.mjs';

export default tseslint.config(
  {
    // files signature for check
    files: ["**/*.ts"],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      '@stylistic': stylistic,
      '@angular-eslint': angularESlint.tsPlugin
    },
    processor: angularESlint.processInlineTemplates,
    languageOptions: {
      // Required for typescript-eslint support
      parser: tseslint.parser,
      // Required for app launch (module) and for scripts (script) and for nodejs app (commonjs)
      sourceType: 'module',
      // Takes last actual version, better use project' version
      ecmaVersion: 'latest',
      // Provides global variables from Node to ESLint
      globals: {
        ...globals.browser,
        ...globals.es2015,
        ...globals.node,
      },
      parserOptions: {
        // Deeper typecheck, but performance is lower
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        // TSConfig for parser, please provide your project config
        project: ['./tsconfig.json'],
      },
    },
    rules: {
      ...ESLINTRULES,
      ...STYLISTIC_ESLINTRULES,
      ...TS_ESLINTRULES,
      ...ANGULAR_ESLINTRULES
    }
  },
  {
    files: ["**/*.html"],
    plugins: {
      '@angular-eslint/template': angularESlint.templatePlugin
    },
    languageOptions: {
      parser: angularESlint.templateParser,
    },
    rules: {
      ...ANGULAR_TEMPLATE_ESLINTRULES
    },
  }
);

