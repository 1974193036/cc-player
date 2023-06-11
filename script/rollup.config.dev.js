const { defineConfig } = require('rollup')
const nodeResolve = require('@rollup/plugin-node-resolve') // 解析第三方库依赖（即 node_module 内的依赖）
const commonjs = require('@rollup/plugin-commonjs') // 识别 commonjs 格式依赖
const ts = require('@rollup/plugin-typescript') // 编译 TypeScript, 在使用rollup-plugin-typescript2的时候无法在--watch下自动编译，所以换成了@rollup/plugin-typescript
const babel = require('@rollup/plugin-babel')
const { DEFAULT_EXTENSIONS } = require('@babel/core')
const postcss = require('rollup-plugin-postcss')
const autoprefixer = require('autoprefixer')
const json = require('@rollup/plugin-json')
const serve = require('rollup-plugin-serve')
const livereload = require('rollup-plugin-livereload')
const path = require('path')
const alias = require('@rollup/plugin-alias')
const px2rem = require('postcss-pxtorem')

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
    watch: {
      include: 'src/**',
      clearScreen: false
    },
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
      postcss({
        plugins: [
          autoprefixer(),
          px2rem({
            rootValue: 16, // 设计稿宽度的1/10
            propList: ['margin-left', 'min-width', 'height', 'font-size', 'bottom', 'width',  'padding', 'transform'] // 需要做转化处理的属性
            // selectorBlackList: [/^video-controller$/,/^video-bottombar$/, /^video-set$/, /^video-duration-time$/, /^video-topbar$/, /^danmaku-send$/]
          })
        ]
      }),
      alias({
        entries: [
          {
            find: '@',
            replacement: path.resolve(__dirname, '../', 'src')
          },
          {
            find: '@@',
            replacement: path.resolve(__dirname, '../')
          }
        ]
      }),
      // 热更新 默认监听根文件夹
      livereload({
        watch: 'dist'
      }),
      // 本地服务器
      serve({
        open: false, // 自动打开页面
        port: 8888,
        host: 'localhost'
      })
    ]
  }
])
