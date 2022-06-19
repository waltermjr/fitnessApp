import theme from './src/global/styles/theme'
const CracoLessPlugin = require('craco-less');
const CracoAntDesignPlugin = require("craco-antd");

export default {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': theme.colors.primary,
              '@background-color-light': 'transparent',
              '@background-color-base': 'transparent',
              '@component-background': 'transparent',
              '@text-color': theme.colors.color,
              '@text-color-secondary': theme.colors.colorSecondary,
              '@page-header-back-color': theme.colors.color,
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
