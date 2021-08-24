const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => {
  return {
    plugins: [new MiniCssExtractPlugin()],
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    mode: process.env.NODE_ENV,
    module: {
      rules: [
        {
          test: /\.jsx?/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
      ],
    },
    devServer: {
      static: {
          directory: path.join(__dirname, '/'),
          publicPath: '/'
      },
      compress: true,
      port: 8080,
      proxy: {
          '/api/leaders': 'http://localhost:3000',
      }
    }
  }
};