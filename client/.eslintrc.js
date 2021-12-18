module.exports = {
  root: true,
  env: {
    es2020: true,
    node: true,
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.eslint.json"],
  },
  plugins: [],
  extends: ["eslint:recommended", "prettier"],
  rules: {},
};
