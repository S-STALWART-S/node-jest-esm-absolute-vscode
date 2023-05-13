// eslint-disable-next-line @typescript-eslint/no-var-requires
const baseConfig = require("./main.cjs");

const OFF = "off";

module.exports = {
  ...baseConfig,
  rules: {
    ...baseConfig.rules,
    "arrow-parens": OFF,
    indent: OFF,
    "linebreak-style": OFF,
    quotes: OFF,
    semi: OFF,
    "unused-imports/no-unused-imports": OFF,
    "unused-imports/no-unused-vars": OFF,
  },
};
