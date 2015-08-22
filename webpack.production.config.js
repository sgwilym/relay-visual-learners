var path = require('path');
var webpack = require('webpack');

module.exports = {
  target: 'web',
  entry: [
    "./src/index"
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: "bundle.js",
    publicPath: 'build/'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin(),
  ],
  postcss: [
    require('autoprefixer-core')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.xml$/,
        loader: require.resolve('./svgGroup.loader'),
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/, loaders: ['style-loader', 'css-loader?modules&importLoaders=2&localIdentName=[hash:base64:5]!postcss-loader!sass'],
        include: path.join(__dirname, 'src')
      }
    ]
  }

};
