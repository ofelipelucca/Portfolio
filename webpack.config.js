import path from 'path';
import Dotenv from 'dotenv-webpack';

const __dirname = path.resolve();

export default {
  entry: "./src/dashboard.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new Dotenv(),
  ],
};
