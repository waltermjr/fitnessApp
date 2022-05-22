const CracoLessPlugin = require('craco-less');
import theme from './src/global/styles'

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
