const env = window.navigator.userAgent.toLowerCase()

// 'mozilla/5.0 (macintosh; intel mac os x 10_15_7) applewebkit/537.36 (khtml, like gecko) chrome/113.0.0.0 safari/537.36'

export const Env = {
  isInWeixin() {
    return env.indexOf('micromessenger') !== -1
  },
  isInApp() {
    return /(^|;\s)app\//.test(env)
  },
  isInIOS() {
    return env.match(/(iphone|ipod|ipad);?/i)
  },
  isInAndroid() {
    return env.match(/android|adr/i)
  },
  isInPc() {
    return !(Env.isInAndroid() || Env.isInApp() || Env.isInIOS() || Env.isInWeixin())
  },
  get env(): 'PC' | 'Mobile' {
    return this.isInPc() ? 'PC' : 'Mobile'
  }
}
