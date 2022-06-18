const CracoLessPlugin = require('craco-less');
import theme from './src/global/styles/theme'

export default {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': theme.colors.primary },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
