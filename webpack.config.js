require("dotenv").config();
const mode = process.env.NODE_ENV;

module.exports = {
  mode: mode,
  entry: "./src/index.js",
  output: {
    path: `${__dirname}/dist`,
    filename: "bundle.js",
  },
  devServer: {
    static: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: "babel-loader",
      },
      {
        test: /\.(glsl|.vert|.flag)$/,
        use: "raw-loader",
      },
    ],
  },
};
