const withTM = require('next-transpile-modules')(['../../globals/'], { resolveSymlinks: true });
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
const { appendAliasesToWebpackConfig } = require('../../globals/utils/sharedWebpackConfig');

module.exports = (phase) => withTM({
  // if building for production, prepend 'hw'
  basePath: phase === PHASE_DEVELOPMENT_SERVER ? '' : '/hw',
  env: {
    IS_DEV: phase === PHASE_DEVELOPMENT_SERVER,
    IMAGE_PREFIX: phase === PHASE_DEVELOPMENT_SERVER ? '' : '/hw',
  },
  webpack: (config, { defaultLoaders }) => {
    /**
     * `config` param becomes `siteConfig`.
     * anything you would do on `config` is now done on `siteConfig`
     */
    const siteConfig = {
      ...appendAliasesToWebpackConfig(config, defaultLoaders),
    };

    return siteConfig;
  },
  sassOptions: {
    prependData: '@import "./styles/index.scss";',
  },
});
