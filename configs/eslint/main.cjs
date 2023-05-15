/* eslint-disable max-lines */
/* eslint-disable @typescript-eslint/no-var-requires */
const js = require("@eslint/js");

const ALWAYS = "always";
const AS_NEEDED = "as-needed";
const DISABLE = false;
const ENABLE = true;
const ERROR = "error";
const NEVER = "never";
const OFF = "off";
const WARN = "warn";

const env = {
  es2021: ENABLE,
  jest: ENABLE,
  node: ENABLE,
};

const extendsArr = [
  "eslint:recommended",
  "plugin:@cspell/recommended",
  "plugin:@typescript-eslint/recommended",
  "plugin:json/recommended",
  "plugin:prettier/recommended",
  "plugin:sonarjs/recommended",
  "prettier",
];

const ignorePatterns = [
  ".git",
  ".github",
  ".husky",
  ".vscode",
  "*.env",
  "*.md",
  "*.sh",
  "*.svg",
  "*.txt",
  "build",
  "dist",
  "lib",
  "node_modules",
  "public",
];

const plugins = [
  "@cspell",
  "@typescript-eslint",
  "prettier",
  "sonarjs",
  "unused-imports",
];

const globals = {
  logger: ENABLE,
};

const parser = "@typescript-eslint/parser";

const parserOptions = {
  ecmaVersion: "latest",
  sourceType: "module",
};

const rules = {
  "@cspell/spellchecker": [
    ERROR,
    {
      autoFix: DISABLE,
      checkComments: DISABLE,
      ignoreImportProperties: DISABLE,
    },
  ],
  "@typescript-eslint/ban-ts-comment": WARN,
  "@typescript-eslint/no-non-null-assertion": WARN,
  "@typescript-eslint/no-unused-vars": OFF,
  "arrow-body-style": [ERROR, AS_NEEDED],
  "arrow-parens": ERROR,
  complexity: [ERROR, 4],
  // smart
  "consistent-return": [ERROR],
  curly: [ERROR, "multi"],
  //TODO: Need an edit
  "default-case": ERROR,
  "default-case-last": ERROR,
  "default-param-last": ERROR,
  "dot-notation": ERROR,
  // multi-line, multi-or-nest
  eqeqeq: [ERROR, ALWAYS],
  "func-name-matching": ERROR,
  // ALWAYS, "treatUndefinedAsUnspecified": true
  "func-names": [ERROR, AS_NEEDED],
  "func-style": [
    ERROR,
    "declaration",
    {
      allowArrowFunctions: true,
    },
  ],
  "grouped-accessor-pairs": [ERROR, "getBeforeSet"],
  "id-denylist": [ERROR, "data", "err", "e", "cb", "callback"],
  "id-length": [
    ERROR,
    {
      max: 30,
      min: 1,
    },
  ],
  indent: [ERROR, 2],
  "init-declarations": [ERROR, ALWAYS],
  "line-comment-position": [
    ERROR,
    {
      position: "above",
    },
  ],
  "linebreak-style": [ERROR, "unix"],
  "lines-between-class-members": ERROR,
  "logical-assignment-operators": [
    ERROR,
    ALWAYS,
    {
      enforceForIfStatements: true,
    },
  ],
  "max-classes-per-file": [ERROR, 1],
  "max-depth": [ERROR, 2],
  "max-lines": [ERROR, 100],
  "max-lines-per-function": [
    ERROR,
    {
      IIFEs: true,
      max: 10,
      skipBlankLines: true,
      skipComments: true,
    },
  ],
  "max-nested-callbacks": [ERROR, 3],
  "max-params": [ERROR, 5],
  "max-statements": [ERROR, 5],
  "max-statements-per-line": [
    ERROR,
    {
      max: 1,
    },
  ],
  "multiline-comment-style": [ERROR, "starred-block"],
  "new-cap": ERROR,
  "new-parens": ERROR,
  "newline-per-chained-call": [
    ERROR,
    {
      ignoreChainWithDepth: 1,
    },
  ],
  "no-alert": ERROR,
  "no-array-constructor": ERROR,
  "no-bitwise": ERROR,
  "no-caller": ERROR,
  "no-case-declarations": ERROR,
  "no-confusing-arrow": ERROR,
  "no-console": ERROR,
  "no-constructor-return": ERROR,
  "no-delete-var": ERROR,
  "no-div-regex": ERROR,
  "no-duplicate-imports": [
    ERROR,
    {
      includeExports: true,
    },
  ],
  "no-empty": [
    ERROR,
    {
      allowEmptyCatch: false,
    },
  ],
  "no-empty-function": ERROR,
  "no-empty-static-block": ERROR,
  "no-eq-null": ERROR,
  "no-eval": ERROR,
  "no-extend-native": ERROR,
  "no-extra-bind": ERROR,
  "no-extra-label": ERROR,
  "no-extra-parens": ERROR,
  "no-implicit-coercion": [
    ERROR,
    {
      disallowTemplateShorthand: true,
    },
  ],
  "no-implicit-globals": ERROR,
  "no-implied-eval": ERROR,
  // allow
  "no-invalid-this": [
    ERROR,
    {
      capIsConstructor: false,
    },
  ],
  "no-iterator": ERROR,
  "no-lone-blocks": ERROR,
  "no-lonely-if": ERROR,
  "no-loop-func": ERROR,
  "no-mixed-operators": ERROR,
  "no-mixed-spaces-and-tabs": ERROR,
  "no-multi-assign": ERROR,
  "no-multi-spaces": ERROR,
  "no-multi-str": ERROR,
  "no-multiple-empty-lines": [
    ERROR,
    {
      max: 1,
      maxEOF: 0,
    },
  ],
  "no-negated-condition": ERROR,
  "no-new": ERROR,
  "no-new-func": ERROR,
  "no-new-native-nonconstructor": ERROR,
  "no-new-object": ERROR,
  "no-new-wrappers": ERROR,
  "no-nonoctal-decimal-escape": ERROR,
  "no-promise-executor-return": ERROR,
  "no-proto": ERROR,
  // groups
  "no-redeclare": ERROR,
  "no-regex-spaces": ERROR,
  "no-return-assign": [ERROR, ALWAYS],
  "no-return-await": ERROR,
  "no-script-url": ERROR,
  "no-self-compare": ERROR,
  "no-sequences": [
    ERROR,
    {
      allowInParentheses: false,
    },
  ],
  "no-shadow": [
    ERROR,
    {
      builtinGlobals: true,
      hoist: "all",
      ignoreOnInitialization: true,
    },
  ],
  "no-shadow-restricted-names": ERROR,
  "no-tabs": [
    ERROR,
    {
      allowIndentationTabs: true,
    },
  ],
  "no-template-curly-in-string": ERROR,
  "no-throw-literal": ERROR,
  "no-trailing-spaces": ERROR,
  "no-undef-init": ERROR,
  "no-undefined": ERROR,
  "no-underscore-dangle": ERROR,
  "no-unmodified-loop-condition": ERROR,
  "no-unneeded-ternary": [
    ERROR,
    {
      defaultAssignment: false,
    },
  ],
  "no-unused-expressions": ERROR,
  "no-unused-labels": ERROR,
  "no-unused-private-class-members": ERROR,
  "no-use-before-define": [
    ERROR,
    {
      allowNamedExports: DISABLE,
      classes: ENABLE,
      functions: DISABLE,
      variables: DISABLE,
    },
  ],
  "no-useless-call": ERROR,
  "no-useless-catch": ERROR,
  "no-useless-computed-key": [
    ERROR,
    {
      enforceForClassMembers: true,
    },
  ],
  "no-useless-concat": ERROR,
  // properties, exceptions, exceptionPatterns
  "no-useless-constructor": ERROR,
  "no-useless-escape": ERROR,
  "no-useless-rename": ERROR,
  "no-useless-return": ERROR,
  "no-var": ERROR,
  "no-void": ERROR,
  "no-whitespace-before-property": ERROR,
  "no-with": ERROR,
  "nonblock-statement-body-position": [ERROR, "beside"],
  "object-shorthand": [ERROR, ALWAYS],
  "one-var-declaration-per-line": [ERROR, ALWAYS],
  "operator-assignment": [ERROR, ALWAYS],
  "operator-linebreak": [ERROR, "none"],
  "prefer-arrow-callback": ERROR,
  "prefer-const": ERROR,
  "prefer-destructuring": [
    ERROR,
    {
      AssignmentExpression: {
        array: true,
        object: true,
      },
      VariableDeclarator: {
        array: true,
        object: true,
      },
    },
    {
      enforceForRenamedProperties: true,
    },
  ],
  "prefer-exponentiation-operator": ERROR,
  "prefer-numeric-literals": ERROR,
  "prefer-object-has-own": ERROR,
  "prefer-object-spread": ERROR,
  "prefer-promise-reject-errors": ERROR,
  "prefer-rest-params": ERROR,
  "prefer-spread": ERROR,
  "prefer-template": ERROR,
  "quote-props": [ERROR, AS_NEEDED],
  quotes: [ERROR, "double"],
  "require-await": ERROR,
  "require-yield": ERROR,
  "rest-spread-spacing": [ERROR, NEVER],
  semi: [ERROR, ALWAYS],
  "semi-spacing": [
    ERROR,
    {
      after: false,
      before: false,
    },
  ],
  "semi-style": [ERROR, "last"],
  "sort-keys": ERROR,
  "sort-vars": ERROR,
  "space-before-blocks": [ERROR, ALWAYS],
  // "space-before-function-paren": ERROR,
  "space-in-parens": [ERROR, NEVER],
  "space-infix-ops": ERROR,
  "space-unary-ops": [
    ERROR,
    {
      nonwords: false,
      words: true,
    },
  ],
  "switch-colon-spacing": ERROR,
  "template-curly-spacing": [ERROR, NEVER],
  "template-tag-spacing": ERROR,
  "unused-imports/no-unused-imports": ERROR,
  "unused-imports/no-unused-vars": [
    ERROR,
    {
      args: "after-used",
      argsIgnorePattern: "^_",
      ignoreRestSiblings: ENABLE,
      vars: "all",
      varsIgnorePattern: "^_",
    },
  ],
  "wrap-iife": [
    ERROR,
    "inside",
    {
      functionPrototypeMethods: true,
    },
  ],
  yoda: ERROR,
};

module.exports = {
  ...js.configs.recommended,
  env,
  extends: extendsArr,
  globals,
  ignorePatterns,
  parser,
  parserOptions,
  plugins,
  rules,
};

/*
 * no-restricted-syntax
 * no-restricted-properties
 * no-restricted-imports
 * no-restricted-globals
 * no-restricted-exports
 * consistent-this
 * capitalized-comments
 * camelcase
 * block-scoped-var
 * no-use-before-define
 * no-unreachable-loop
 * yield-star-spacing
 * padding-line-between-statements
 * object-property-newline
 * object-curly-spacing
 * one-var
 * spaced-comment
 * vars-on-top
 * array-bracket-newline
 * array-bracket-spacing
 * arrow-spacing
 * block-spacing
 * brace-style
 * comma-dangle
 * comma-spacing
 * comma-style
 * computed-property-spacing
 * dot-location
 * eol-last
 * func-call-spacing
 * function-paren-newline
 * generator-star-spacing
 * implicit-arrow-linebreak
 * key-spacing
 * keyword-spacing
 * max-len
 * multiline-ternary
 * object-curly-newline
 *
 */

/*
 * "sort-imports": [
 *   ERROR,
 *   {
 *     ignoreCase: false,
 *     ignoreDeclarationSort: false,
 *     ignoreMemberSort: false,
 *     memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
 *     allowSeparatedGroups: false,
 *   },
 * ],
 */

/*
 * "id-match": [
 *   ERROR,
 *   "[a-z]+(?:[A-Z0-9]+[a-z0-9]+[A-Za-z0-9]*)*|(?:[A-Z][a-z0-9]+)(?:[A-Z]+[a-z0-9]*)*|[A-Z0-9]+(?:_[A-Z0-9]+)*|[a-z0-9]+(?:_[a-z0-9]+)*",
 *   {
 *     properties: true,
 *     classFields: true,
 *     onlyDeclarations: true,
 *   },
 * ],
 */
/*
 * "no-magic-numbers": [
 *   ERROR,
 *   {
 *     ignoreArrayIndexes: true,
 *     ignoreDefaultValues: true,
 *     ignoreClassFieldInitialValues: true,
 *     enforceConst: true,
 *   },
 * ], // ignore
 */
/*
 * "no-warning-comments": [ERROR, {
 *   "location": "anywhere",
 *   "terms": ["todo", "fixme", "any other term"]
 * }],
 */
/*
 * "padded-blocks": [ERROR, NEVER, {
 *   allowSingleLineBlocks: false,
 *   blocks: NEVER,
 *   classes: NEVER,
 *   switches: NEVER
 * }],
 */
