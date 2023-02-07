const path = require("path");
const ZipPlugin = require("zip-webpack-plugin");

module.exports = {
  entry: "./lambda/index.ts",
  devtool: "eval-cheap-source-map",
  mode: "development",
  target: "node",
  optimization: {
    minimize: false,
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  module: {
    rules: [
      {
        test: /\.(tsx?)$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              experimentalWatchApi: true,
            },
          },
        ],
        include: [path.resolve(__dirname, "lambda")],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".json", ".mjs"],
    mainFields: ["main"],
    symlinks: false,
    cacheWithContext: false,
  },
  output: {
    filename: "index.js",
    pathinfo: false,
    path: path.join(__dirname, "dist"),
    libraryTarget: "commonjs",
  },
  externals: ["aws-sdk"],
  plugins: [
    new ZipPlugin({
      include: ["index.js"],
    }),
  ],
};