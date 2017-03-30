var path = require('path');
let assets_stylesheets = path.resolve(__dirname, '../../../', 'app', 'assets', 'stylesheets');
let node_modules_path = path.resolve(__dirname, '../../../', 'node_modules');

module.exports = {
  test: /\.useable\.(scss|sass|css)$/i,
  use: [
    {loader: "style-loader/useable"},
    {loader: "css-loader"},
    {
      loader: "sass-loader",
      options: {
        includePaths: [
          assets_stylesheets,
          node_modules_path
        ]
      }
    },
  ],
}
