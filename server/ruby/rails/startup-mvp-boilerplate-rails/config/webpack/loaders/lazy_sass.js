module.exports = {
  test: /\.useable\.(scss|sass|css)$/i,
  use: [
    {loader: "style-loader/useable"},
    {loader: "css-loader"},
    {loader: "sass-loader"},
  ],
}
