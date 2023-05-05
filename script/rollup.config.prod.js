const { defineConfig } = require('rollup')
const nodeResolve = require('@rollup/plugin-node-resolve') // 解析第三方库依赖（即 node_module 内的依赖）
const commonjs = require('@rollup/plugin-commonjs') // 识别 commonjs 格式依赖
const ts = require('rollup-plugin-typescript2') // 编译 TypeScript
const babel = require('@rollup/plugin-babel')
const { DEFAULT_EXTENSIONS } = require('@babel/core')
const terser = require('@rollup/plugin-terser') // 代码压缩
const alias = require('@rollup/plugin-alias')
const postcss = require('rollup-plugin-postcss')
const autoprefixer = require('autoprefixer')
const json = require('@rollup/plugin-json')
const path = require('path')
// 用于在导入socket.io-client包时进行Polyfill，因为该库中引入了很多只在node环境下才具有的第三方包例如http,stream,buffer等
// 因此需要导入 'rollup-plugin-node-builtins' 和 "rollup-plugin-node-globals"进行Polyfill
const builtins = require('rollup-plugin-node-builtins')
const globals = require('rollup-plugin-node-globals')

module.exports = defineConfig([
  {
    input: './src/index.ts',
    output: [
      {
        file: './dist/player.cjs.js',
        format: 'cjs'
      },
      {
        file: './dist/player.min.cjs.js',
        format: 'cjs',
        plugins: [terser()]
      },
      {
        file: './dist/player.es.js',
        format: 'es'
      },
      {
        file: './dist/player.min.es.js',
        format: 'es',
        plugins: [terser()]
      },
      {
        file: './dist/player.umd.js',
        format: 'umd',
        name: 'Player'
      },
      {
        file: './dist/player.min.umd.js',
        format: 'umd',
        name: 'Player',
        plugins: [terser()]
      }
    ],
    plugins: [
      ts(),
      nodeResolve({
        browser: true
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
      json(),
      builtins(),
      globals(),
      alias({
        entries: [
          {
            find: '@',
            replacement: path.resolve(__dirname, '../', 'src')
          }
        ]
      }),
      postcss({
        plugins:[
          autoprefixer()
        ]
      })
    ]
  }
])
