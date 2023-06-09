module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        /* Babel 会在 Rollup 有机会做处理之前，将我们的模块转成 CommonJS，导致 Rollup 的一些处理失败 */
        modules: false
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      // 与 babelHelpers: 'runtime' 配合使用
      '@babel/plugin-transform-runtime',
      {
        corejs: {
          version: 3,
          proposals: true
        }
      }
    ]
  ]
}
