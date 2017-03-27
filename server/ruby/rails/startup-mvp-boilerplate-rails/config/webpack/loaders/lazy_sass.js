module.exports = {
  test: /\.(lscss|lsass|lcss)$/i,
  use: [
    {loader: "style-loader/useable"},
    {loader: "css-loader"},
    {loader: "postcss-loader"},
    {loader: "sass-loader"},
  ],
}
