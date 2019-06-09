const path = require("path");

module.exports = {
  entry: ["babel-polyfill", "./src/client"],
  devtool: "source-map",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    chunkFilename: "[name].js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendor',
          test: /node_modules/,
          chunks: 'all',
          priority: 2
        }
      }
    }
  },
  devServer: {
    historyApiFallback: true
  }
};
