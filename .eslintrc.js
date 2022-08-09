module.exports = {
  extends: ["prettier"],
  plugins: ["eslint-plugin-react"],
  rules: {
    indent: "error",
    quotes: [2, "single", "avoid-escape"],
  },
};
