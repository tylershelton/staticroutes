import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import process from 'process';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default {
  mode: process.env.NODE_ENV || 'production',
  entry: './client/index.js',
  
  // configure loaders
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html'
    }),
  ],

  devServer: {
    host: 'localhost',
    port: process.env.PORT || 8080,

    hot: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },

  devtool: 'eval-source-map',
};
