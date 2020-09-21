// 页面-打开
export async function pageOpen (params) {
  wx.miniProgram.navigateTo(params)
}

// 页面-打开
export async function pageOpenDispatch (params) {
  wx.miniProgram.navigateTo({
    url: '/pages/packagesOther/dispatch/index?appId=' + params.appId + '&path=' + encodeURIComponent(params.path)
  })
}

// 页面-打开-webview
export function pageOpenWebView (params) {
  wx.miniProgram.navigateTo({
    url: '/pages/packagesOther/webview/index?url=' + encodeURIComponent(params.url)
  })
}
