import postcss from 'rollup-plugin-postcss';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/app.js',  // основной JS-файл
  output: {
    dir: 'dist',  // папка для выходных файлов
    format: 'iife'  // формат бандла
  },
  plugins: [
    postcss({
      extract: true,    // Собирает все CSS в один файл
      minimize: true,   // Минифицирует CSS
      sourceMap: true   // Создает карту источников (source map)
    }),
    nodeResolve()  // Плагин для разрешения модулей
  ]
};
