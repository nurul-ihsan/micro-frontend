const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = (_, argv) => ({
  output: {
    publicPath: 'http://localhost:3030/',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.vue', '.jsx', '.js', '.json'],
  },

  devServer: {
    port: 3030,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.tsx?$/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              appendTsSuffixTo: ['\\.vue$'],
              happyPackMode: true,
            },
          },
        ],
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },

  plugins: [
    new VueLoaderPlugin(),
    new ModuleFederationPlugin({
      name: 'vue_module',
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {
        './Banner': './src/BannerWrapper.js',
      },
      shared: require('./package.json').dependencies,
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
});
