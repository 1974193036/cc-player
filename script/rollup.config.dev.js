const { defineConfig } = require('rollup')
const nodeResolve = require('@rollup/plugin-node-resolve') // 解析第三方库依赖（即 node_module 内的依赖）
const commonjs = require('@rollup/plugin-commonjs') // 识别 commonjs 格式依赖
const ts = require('rollup-plugin-typescript2') // 编译 TypeScript
const babel = require('@rollup/plugin-babel')
const { DEFAULT_EXTENSIONS } = require('@babel/core')
const postcss = require('rollup-plugin-postcss')
const autoprefixer = require('autoprefixer')
const serve = require('rollup-plugin-serve')
const livereload = require('rollup-plugin-livereload')
const path = require('path')
const alias = require('@rollup/plugin-alias')

const extensions = ['.ts', '.less']

module.exports = defineConfig([
  {
    input: './src/index.ts',
    output: [
      {
        file: './dist/player.umd.js',
        format: 'umd',
        name: 'Player',
        sourcemap: true
      }
    ],
    plugins: [
      ts(),
      nodeResolve({
        extensions
      }),
      babel({
        // 编译库使用
        babelHelpers: 'runtime',
        // 只转换源代码，不转换外部依赖
        exclude: 'node_modules/**',
        // babel 默认不支持 ts 需要手动添加
        extensions: [...DEFAULT_EXTENSIONS, '.ts']
      }),
      commonjs(),
      postcss({
        plugins: [autoprefixer()]
      }),
      alias({
        entries: [
          {
            find: '@',
            replacement: path.resolve(__dirname, '../', 'src')
          }
        ]
      }),
      // 热更新 默认监听根文件夹
      livereload(),
      // 本地服务器
      serve({
        open: true, // 自动打开页面
        port: 8888,
        host: 'localhost'
      })
    ]
  }
])
