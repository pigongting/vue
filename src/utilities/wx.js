/**
 * 判断是否是微信内置浏览器
 */
export function isWeiXinBrowser () {
  const ua = window.navigator.userAgent.toLowerCase()
  return ua.indexOf('micromessenger') > -1
}

/**
 * 获取微信版本 eg. 7.0.16.1600
 */
export function getWeixinVersion () {
  // eslint-disable-next-line
  return navigator.userAgent.match(/MicroMessenger\/([\d\.]+)/i)[1];
}

// 检测是否支持打开小程序
export function supportLaunchWeapp () {
  const wxVersion = (isWeiXinBrowser() && getWeixinVersion()) || ''

  if (!wxVersion) {
    return false
  }

  const v = wxVersion.split('.').map((item) => Number(item))

  if (v[0] < 7) {
    return false
  }

  if (v[0] === 7 && v[1] < 0) {
    return false
  }

  if (v[0] === 7 && v[1] === 0 && v[2] < 12) {
    return false
  }

  return true
}
