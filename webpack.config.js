const path = require('path');
const webpack = require('webpack');


module.exports = {
  mode: 'production', // Ou 'development' se desejar ver os detalhes dos arquivos gerados
  entry: './src/server.ts', // Arquivo principal da aplicação
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Nome do arquivo de saída
  },
plugins: [
    new webpack.IgnorePlugin({
      resourceRegExp: /^child_process$/,
    }),
    new webpack.IgnorePlugin({
      resourceRegExp: /^node-gyp$/,
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
    fallback: {
      path: require.resolve('path-browserify'),
      crypto: false,
      fs: false,
      assert: require.resolve('assert/'),
      process: require.resolve('process/browser'),
      stream: require.resolve('stream-browserify'),
      buffer: require.resolve('buffer/'),
      util: require.resolve('util/'),
      querystring: require.resolve("querystring-es3"),
      zlib: require.resolve('browserify-zlib'),
      net: require.resolve('net'),
      tls: require.resolve('tls'),
      http: require.resolve("stream-http"),
      os: require.resolve("os-browserify/browser"),
      constants: require.resolve('constants-browserify'),
      crypto: require.resolve('crypto-browserify'),
      buffer: require.resolve('buffer/'),
      util: require.resolve('util/'),
      querystring: require.resolve('querystring-es3'),
      zlib: require.resolve('browserify-zlib'),
      nock: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.ts$/, // Aplicar a regra para arquivos .ts
        use: 'ts-loader', // Usar o ts-loader para transpilar os arquivos TypeScript
        exclude: /node_modules/,
      },
      {
        test: /\.js$/, // Aplicar a regra para arquivos .js
        use: 'babel-loader', // Usar o babel-loader para transpilar os arquivos JavaScript
        exclude: /node_modules/,
      },
    ],
  },
};
