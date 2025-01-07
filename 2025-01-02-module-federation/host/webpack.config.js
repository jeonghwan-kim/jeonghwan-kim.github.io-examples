const path = require("path");
const {
  ModuleFederationPlugin,
} = require("@module-federation/enhanced/webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.jsx",
  output: {
    clean: true,
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    port: 3000,
    client: {
      overlay: false,
    },
  },
  devtool: "inline-source-map",
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
      template: path.resolve(__dirname, "src/template.html"),
    }),
    new ModuleFederationPlugin({
      name: "app",
      remotes: {
        myRemote: "myRemote@http://localhost:3001/dist/mf-manifest.json",
      },
      dts: {
        generateTypes: false,
      },
    }),
  ],
};
