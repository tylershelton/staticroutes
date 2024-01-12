import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import process from 'process';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default {
  mode: process.env.NODE_ENV || 'production',
  entry: './client/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  // configure loaders
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
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

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },

  devServer: {
    host: '0.0.0.0',
    port: process.env.PORT || 8080,

    hot: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },

  watchOptions: {
    poll: 1000,
  },

  devtool: 'eval-source-map',
};
