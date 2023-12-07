const path = require("path");
const webpack = require('webpack');
const dotenv = require('dotenv').config( {
  path: path.join(__dirname, '.env')
} );

module.exports = {
  entry: "./src/dashboard.js",
  output: {
    path: path.resolve(__dirname, __dirname),
    filename: "dashboard.js",
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        include: path.resolve(__dirname, "src"),
        use: {
          loader: "babel-loader"
        }
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.GITHUB_USERNAME': JSON.stringify(dotenv.parsed.GITHUB_USERNAME),
      'process.env.GITHUB_TOKEN': JSON.stringify(dotenv.parsed.GITHUB_TOKEN)
    }),
  ],
};