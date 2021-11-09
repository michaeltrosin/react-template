const path = require('path');

const rules = require('./img_rules');

module.exports = {
  mode: 'development',
  entry: './src/renderer.tsx',
  //target: 'electron-renderer',
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist/renderer.js'),
    compress: true,
    port: 9000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'asset': path.resolve(__dirname, 'asset'),
    },
    extensions: ['.tsx', '.ts', '.js', '.png', '.jpg', '.svg'],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        include: /src/,
        use: [{loader: 'ts-loader'}],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      rules.source,
      rules.inline,
      rules.resource
    ],
  },
  output: {
    path: __dirname + '/dist',
    filename: 'renderer.js',
  },
  "externals": {
    "child_process": "require('child_process')",
    "fs": "require('fs')",
    "path": "require('path')",
  },
};
