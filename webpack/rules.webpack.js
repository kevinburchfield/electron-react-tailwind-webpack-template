const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = [
  {
    test: /\.node$/,
    use: 'node-loader',
  },
  {
    test: /\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: '@marshallofsound/webpack-asset-relocator-loader',
      options: {
        outputAssetBase: 'native_modules',
      },
    },
  },
  {
    test: /\.(js|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader'
    }
  },
  {
    test: /\.(png|jpe?g|gif)$/i,
    loader: 'file-loader',
    options: {
      name: '[path][name].[ext]',
    },
  },
  {
    test: /\.(sass|less|scss)/i,
    use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
  },
  {
    test: /\.css$/,
    use: [
      MiniCssExtractPlugin.loader,
      "css-loader", "postcss-loader",
      ],
  },
]