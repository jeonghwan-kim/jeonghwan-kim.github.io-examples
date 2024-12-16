const HtmlWebpackPlugin = require("html-webpack-plugin");
const {resolve} = require("node:path");
module.exports = {
  mode: "development",
  entry: "./src/index.jsx",
  output: {
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "esbuild-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "src/template.html"),
    })
  ]
};
