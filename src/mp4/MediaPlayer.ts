import MP4Box, { MP4File } from 'mp4box'

class MediaPlayer {
  url: string
  video: HTMLVideoElement
  mp4boxFile: MP4File
  constructor(url: string, video: HTMLVideoElement) {
    this.url = url
    this.video = video
    this.init()
  }

  init() {
    this.mp4boxFile = MP4Box.createFile()
    this.initEvent()
    console.log(this.mp4boxFile)
  }

  initEvent() {

  }
}

export default MediaPlayer
