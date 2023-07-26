import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export default {
  entry: './src/index.js', // Arquivo principal da aplicação
  output: {
    path: path.resolve(__dirname, 'dist'), // Caminho de saída dos arquivos transpilados
    filename: 'bundle.js', // Nome do arquivo de saída
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Suportar arquivos JavaScript e JSX
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Aplicar a regra para arquivos .js e .jsx
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Usar o babel-loader para transpilar os arquivos JavaScript
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Presets do Babel para suportar JavaScript moderno e React
          },
        },
      },
    ],
  },
};
