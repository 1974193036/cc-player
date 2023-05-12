import { AxiosMethod, AxiosHeader, AxiosData, AxiosReturnType } from '@/types/AxiosRequest'

function sendRequest(
  url: string,
  method: AxiosMethod,
  header: AxiosHeader = {},
  responseType: XMLHttpRequestResponseType = 'text',
  data?: AxiosData
): Promise<AxiosReturnType> {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open(method, url)
    for (let index in header) {
      xhr.setRequestHeader(index, header[index])
    }
    xhr.responseType = responseType
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
          resolve({
            status: 'success',
            data: xhr.response
          })
        } else {
          reject({
            status: 'fail',
            data: xhr.response
          })
        }
      }
    }
    xhr.send(data)
  })
}

export class Axios {
  private url: string
  private method: AxiosMethod
  private header: AxiosHeader
  private responseType: XMLHttpRequestResponseType
  private data: AxiosData
  constructor(
    url?: string,
    method?: AxiosMethod,
    header?: AxiosHeader,
    responseType?: XMLHttpRequestResponseType,
    data?: AxiosData
  ) {
    this.url = url
    this.method = method
    this.header = header
    this.responseType = responseType
    this.data = data
  }

  get(url, header, responseType) {
    return sendRequest(url, 'get', header, responseType)
  }

  post(url, header, responseType, data) {
    return sendRequest(url, 'post', header, responseType, data)
  }
}

// export function Axios(
//   url?: string,
//   method?: AxiosMethod,
//   header?: AxiosHeader,
//   responseType?: XMLHttpRequestResponseType,
//   data?: AxiosData
// ) {
//   this.url = url
//   this.method = method
//   this.header = header
//   this.responseType = responseType
//   this.data = data

//   // if (this.url && this.method) {
//   //   return sendRequest(url, method, header, responseType, data)
//   // }
// }

// Axios.prototype.get = function (url, header, responseType) {
//   return sendRequest(url, 'get', header, responseType)
// }

// Axios.prototype.post = function (url, header, responseType, data) {
//   return sendRequest(url, 'post', header, responseType, data)
// }
