const {
  override,
  useEslintRc,
  addWebpackAlias
} = require('customize-cra');

module.exports = override(
  useEslintRc(),
  addWebpackAlias({
      "react-dom": "@hot-loader/react-dom"
  }),
);