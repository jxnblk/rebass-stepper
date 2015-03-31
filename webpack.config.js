
module.exports = {
  entry: './demo/entry.js',
  output: {
    path: __dirname + '/demo',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: "jsx-loader" }
    ]
  }
};
