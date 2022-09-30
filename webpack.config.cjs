const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    app: path.resolve(__dirname, "src/app.js"),
    serviceWorker: {
      import: path.resolve(__dirname, "src/serviceWorker.js"),
      chunkLoading: false, // This _should_ put everything in one JS file, but it doesn't
    },
  },

  output: {
    clean: true,
  },
  devtool: false,

  // Enable long-term caching of node_modules. See https://webpack.js.org/guides/caching/
  optimization: {
    moduleIds: "deterministic",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",

          // Include all node_modules that are required for the initial load
          // in one big chunk. Dynamically-imported node_modules will still be
          // put in their own chunks.
          chunks: "initial",
        },
      },
    },
  },
};
