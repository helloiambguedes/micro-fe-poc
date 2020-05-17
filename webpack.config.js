const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

const config = {
  entry: {
    vanillaApp: "./vanillaApp",
    reactApp: "./reactApp",
    vueApp: "./vueApp",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "micro-fe-poc",
      template: "public/index.html",
    }),
    new VueLoaderPlugin(),
  ],
};

module.exports = config;
