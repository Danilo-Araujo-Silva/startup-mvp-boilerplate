module.exports = {
  // test: /\.(lscss|lsass|lcss)$/i,
  test: /^.*style-loader\/useable!css-loader!.*\.(sass|scss|css)$/i,
  use: [
    {loader: "style-loader/useable"},
    {loader: "css-loader"},
    {loader: "postcss-loader"},
    {loader: "sass-loader"},
  ],
}
