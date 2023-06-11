const { defineConfig } = require('rollup')
const nodeResolve = require('@rollup/plugin-node-resolve') // 解析第三方库依赖（即 node_module 内的依赖）
const commonjs = require('@rollup/plugin-commonjs') // 识别 commonjs 格式依赖
const ts = require('@rollup/plugin-typescript') // 编译 TypeScript, 在使用rollup-plugin-typescript2的时候无法在--watch下自动编译，所以换成了@rollup/plugin-typescript
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
const px2rem = require('postcss-pxtorem')

module.exports = defineConfig([
  {
    input: './src/index.ts',
    output: [
      {
        file: './dist/player.cjs.js',
        format: 'cjs'
      },
      {
        file: './dist/player.cjs.min.js',
        format: 'cjs',
        plugins: [terser()]
      },
      {
        file: './dist/player.esm.js',
        format: 'esm'
      },
      {
        file: './dist/player.esm.min.js',
        format: 'esm',
        plugins: [terser()]
      },
      {
        file: './dist/player.umd.js',
        format: 'umd',
        name: 'Player'
      },
      {
        file: './dist/player.umd.min.js',
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
      commonjs(),
      babel({
        // 编译库使用
        babelHelpers: 'runtime',
        // 只转换源代码，不转换外部依赖
        exclude: 'node_modules/**',
        // babel 默认不支持 ts 需要手动添加
        extensions: [...DEFAULT_EXTENSIONS, '.ts']
      }),
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
        plugins: [
          autoprefixer(),
          px2rem({
            rootValue: 16, // 设计稿宽度的1/10
            propList: ['margin-left', 'min-width', 'height', 'font-size', 'bottom', 'width', 'padding', 'transform'] // 需要做转化处理的属性
            // selectorBlackList: [/^video-controller$/,/^video-bottombar$/, /^video-set$/, /^video-duration-time$/, /^video-topbar$/, /^danmaku-send$/]
          })
        ]
      })
    ]
  }
])
