var path = require('path');
let root = path.resolve(__dirname, '../../../', 'node_modules');

module.exports = {
  test: /\.useable\.(scss|sass|css)$/i,
  use: [
    {loader: "style-loader/useable"},
    {loader: "css-loader"},
    {
      loader: "sass-loader",
      options: {
        includePaths: [root]
      }
    },
  ],
}
