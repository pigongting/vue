import {
  rGet
} from './rpcServiceV'

export async function rGetWxJsapi () {
  return rGet('https://mall.kaisatech.com/kaisagroup-mobile/wxController/signature.json?appId=wx87dbe253c2b34ca8&url=' + encodeURIComponent('https://mall.kaisatech.com/national-day/'))
}
