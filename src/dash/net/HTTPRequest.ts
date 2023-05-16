import { FactoryObject } from '@/types/dash/Factory'
import { RequestHeader, RequestMethod, ResponseType } from '@/types/dash/Net'

export default class HTTPRequest {
  sendRequestTime: number | null
  getResponseTime: number | null
  url: string = ''
  header: RequestHeader | null
  method: RequestMethod | null
  responseType: ResponseType | null
  xhr?: XMLHttpRequest
  constructor(config: FactoryObject) {
    this.sendRequestTime = new Date().getTime()
    this.url = config.url
    this.header = config.header
    this.method = config.method
    this.responseType = config.responseType
  }
}
