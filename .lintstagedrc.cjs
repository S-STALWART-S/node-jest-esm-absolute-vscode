module.exports = {
  "*": "prettier --write --list-different",
  "*.{js,ts,json}": "eslint --config configs/eslint/main.cjs --fix",
};
