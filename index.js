// let s = '$RepresentationID$-270146-i-$Number$.m4s'
// 'v1_257-270146-i-15.m4s'

function generateTemplate(s) {
  let splitStr = []
  let format = []
  for (let i = 0; i < s.length; i++) {
    let str = s.slice(0, i + 1)
    if (/\$.+?\$/.test(str)) {
      format.push(str.match(/\$(.+?)\$/)[1])
      splitStr.push(str.replace(/\$.+?\$/, ''), '%format%')
      s = s.slice(i + 1)
      i = 0
      continue
    }
  }

  return { splitStr, format }
}

console.log(generateTemplate('$RepresentationID$-270146-i-$Number$.m4s')) 
// {splitStr: [ '', '%format%', '-270146-i-', '%format%' ],format: [ 'RepresentationID', 'Number' ]}

console.log(generateTemplate('$v1_257$-270146-i-$15$.m4s'))
// {splitStr: [ '', '%format%', '-270146-i-', '%format%' ],format: [ 'v1_257', '15' ]}