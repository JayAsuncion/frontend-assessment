const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const tsConfig = require('./tsconfig.json');

const generateWebpackAliasFromJsConfig = (jsConfigPaths) => {
  return Object.keys(jsConfigPaths)
    .reduce((currentAlias, pathKey) => {
      const [aliasKey] = pathKey.split('/');
      const [pathAtJsConfig] = jsConfigPaths[pathKey];
      const [relativePathToDir] = pathAtJsConfig.split('/*');
      const absolutePath = path.resolve(__dirname, relativePathToDir);

      return {
        ...currentAlias,
        [aliasKey]: absolutePath,
      };
    }, {});
};

module.exports = {
  mode: 'development',
  entry: './index.tsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'build.js'
  },
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: generateWebpackAliasFromJsConfig(tsConfig.compilerOptions.paths),
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}