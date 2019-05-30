const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const {
  override,
  useEslintRc,
  addWebpackAlias
} = require('customize-cra');

// module.exports = function override(config, env) {
//     if (env === 'development') {
//         config.resolve.alias["react-dom"] = "@hot-loader/react-dom";
//     }
//     config = rewireReactHotLoader(config, env);
//     return config;
// };

module.exports = override(
  useEslintRc(),
  addWebpackAlias({
    "react-dom": "@hot-loader/react-dom"
  }),
);
