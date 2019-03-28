const path = require('path');

module.exports = {
  entry: './client/src/BookingModule.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /mode_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css'],
  },
  output: {
    path: path.join(__dirname, './client/dist'),
    filename: 'BookingModule.bundle.js',
  },
};
