const path = require('path');

module.exports = {
  entry: './src/CardSection.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'CardWidget.js',
    library: 'CardWidget',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
