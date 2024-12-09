const path = require("path");
const {
  ModuleFederationPlugin,
} = require("@module-federation/enhanced/webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationConsoleLogPlugin = require("./module-federation-console-log-plugin");

process.env.FEDERATION_DEBUG = "true";

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    clean: true,
    publicPath: "/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  devServer: {
    port: 3000,
    client: {
      overlay: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
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
        remote: "remote@http://localhost:3001/dist/mf-manifest.json",
      },
      dts: {
        generateTypes: false,
      },
    }),
    new ModuleFederationConsoleLogPlugin(),
  ],
};
