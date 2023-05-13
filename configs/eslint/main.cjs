const ENABLE = true;
const DISABLE = false;
const OFF = "off";
const ERROR = "error";
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
  "arrow-parens": ERROR,
  indent: [ERROR, 2],
  "linebreak-style": [ERROR, "unix"],
  "no-console": ERROR,
  "no-delete-var": ERROR,
  "no-use-before-define": [
    ERROR,
    {
      allowNamedExports: DISABLE,
      classes: ENABLE,
      functions: DISABLE,
      variables: DISABLE,
    },
  ],
  "no-var": ERROR,
  "object-shorthand": [ERROR, "always"],
  quotes: [ERROR, "double"],
  semi: [ERROR, "always"],
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
};

module.exports = {
  env,
  extends: extendsArr,
  globals,
  ignorePatterns,
  parser,
  parserOptions,
  plugins,
  rules,
};
