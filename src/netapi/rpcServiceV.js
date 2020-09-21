import request from 'umi-request'

export function rGet (url) {
  return request.get(url)
}
