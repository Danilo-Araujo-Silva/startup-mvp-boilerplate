var path = require('path');
let assets_stylesheets = path.resolve(__dirname, '../../../', 'app', 'assets', 'stylesheets');
let node_modules_path = path.resolve(__dirname, '../../../', 'node_modules');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  test: /\.(scss|sass|css)$/i,
  exclude: /\.useable\.(scss|sass|css)$/i,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      {loader: "css-loader"},
      // Enable the next statament cause import problems.
      // An import like `@import '~sanitize.css/sanitize.css'` not works when it is encapsulated on a
      //  head.useable.scss and head.scss.
      // TODO find a workaround, probably with postcss/postcss-loader.
      // {loader: "postcss-loader"},
      {
        loader: "sass-loader",
        options: {
          includePaths: [
            assets_stylesheets,
            node_modules_path
          ]
        }
      },
    ]
  })
};
