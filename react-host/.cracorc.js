const { ModuleFederationPlugin } = require('webpack').container;

const deps = require('./package.json').dependencies;

module.exports = () => ({
  webpack: {
    configure: {
      output: {
        publicPath: 'auto',
      },
    },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: 'ReactHost',
          filename: 'remoteEntry.js',
          remotes: {
            remoteReact: 'remoteReact@http://localhost:3001/remoteEntry.js',
            vueModule: 'vue_module@http://localhost:3030/remoteEntry.js',
          },
          shared: {
            ...deps,
            react: {
              singleton: true,
              requiredVersion: deps.react,
            },
            'react-dom': {
              singleton: true,
              requiredVersion: deps['react-dom'],
            },
          },
        }),
      ],
    },
  },
});
