const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)

var path = require('path')

app.all('*', function (req, res, next) {
  // 设置允许跨域的域名,*代表允许任意域名跨域
  res.header('Access-Control-Allow-Origin', '*')
  // 允许的header类型
  res.header('Access-Control-Allow-Headers', 'content-type')
  // 跨域允许的请求方式
  res.header('Access-Control-Allow-Methods', 'DELETE,PUT,POST,GET,OPTIONS')
  if (req.method.toLowerCase() == 'options') res.send(200) // 让options 尝试请求快速结束
  else next()
})

app.get('/users', function (req, res) {
  res.status(200).json({
    name: '张三',
    age: 18
  })
})

app.get(/.*vtt$/, function (req, res) {
  // console.log(req.path)
  var fileName = req.path
  var options = {
    root: path.join(__dirname, 'assets'),
    dotfiles: 'deny',
    headers: {
      'Content-type': 'text/vtt; charset=utf-8',
      'Content-Disposition': 'inline; filename="subtitle.jp.vtt"'
    }
  }
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log('err:', err)
    } else {
      console.log('Sent:', fileName)
    }
  })
})

app.get('/video.mp4', function (req, res) {
  var fileName = '/video.mp4'
  var options = {
    root: path.join(__dirname, 'assets'),
    headers: {
      'Content-type': 'video/mp4',
      'Content-Range': 'bytes 0-318464/318465',
      'Content-Length': '318465',
      'accept-ranges': 'bytes'
    }
  }
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log('err:', err)
    } else {
      console.log('Sent:', fileName)
    }
  })
})

app.get('/fireworks.mp4', function (req, res) {
  var fileName = '/fireworks.mp4'
  var options = {
    root: path.join(__dirname, 'assets'),
    headers: {
      'Content-type': 'video/mp4',
      'Content-Length': '15236334',
      'Content-Disposition': 'inline; filename="fireworks.mp4"',
      'accept-ranges': 'bytes'
    }
  }
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log('err:', err)
    } else {
      console.log('Sent:', fileName)
    }
  })
})

app.get('/danmaku', function (req, res) {
  // console.log(req.query) // {time: 'xxx'}
  var arr = []
  for (let i = 0; i < 10; i++) {
    arr.push(queue[i % queue.length])
  }
  res.json(arr)
})

io.on('connection', function (socket) {
  console.log('A user connected')
  //Whenever someone disconnects this piece of code executed
  socket.on('disconnect', function () {
    console.log('A user disconnected')
  })

  socket.on('RequestDanmakuData', function (data) {
    // console.log('RequestDanmakuData', data)
    var arr = []
    for (let i = 0; i < 10; i++) {
      arr.push(queue[i % queue.length])
    }
    // console.log(arr)
    socket.emit('SendDanmakuData', arr)
  })
})

server.listen(3000, function () {
  console.log('listening on *:3000')
})

const queue = [
  {
    message: '秋招实在是寒气逼人',
    fontSize: 24,
    fontColor: 'blue'
  },
  {
    message: '任正非表明中国互联网行业进入寒冬！！！',
    fontSize: 30
  },
  {
    message: '任何邪恶，终将绳之以法11',
    fontColor: 'green'
  },
  {
    message: 'HHHHHHHHHHHHH'
  },
  {
    message: '任何邪恶，终将绳之以法22'
  },
  {
    message: '大家好，我是昊京'
  },
  {
    message: '2333333333333333333333333333333333'
  },
  {
    message: '经纬恒润内推',
    fontColor: 'red'
  },
  '111111111111而非武功果然'
]
