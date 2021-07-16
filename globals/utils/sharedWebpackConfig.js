const path = require('path');

/**
 *
 * @param config - NextJS's webpack config object
 * @param defaultLoaders - NextJS's default loaders we'll need when configuring new a JS Loader for our globals/libs directories
 * @returns {object} - NextJS's webpack config with our aliases appended to it.
 */
exports.appendAliasesToWebpackConfig = (config, defaultLoaders) => {
  // Global directory path
  const GLOBAL_DIR_PATH = path.resolve(__dirname, '../../globals/');
  const LIB_DIR_PATH = path.resolve(__dirname, '../../libs/');

  // Aliases we want nextjs/webpack to know about
  const aliasPathsToResolve = [
    { name: '@globals', path: GLOBAL_DIR_PATH },
    { name: '@libs', path: LIB_DIR_PATH },
  ];

  config.module.rules.push({
    test: /\.(js|jsx)$/,
    include: [
      GLOBAL_DIR_PATH,
      LIB_DIR_PATH,
    ],
    // TODO: FIX BABEL TRANSPILING
    use: [defaultLoaders.babel],
  });

  /** Resolve Aliases */
  aliasPathsToResolve.forEach((module) => {
    config.resolve.alias[module.name] = module.path;
  });

  return config;
};
