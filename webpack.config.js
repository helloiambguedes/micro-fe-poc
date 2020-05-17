const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: {
    app: "./app",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "micro-fe-poc",
    }),
  ],
};

module.exports = config;
