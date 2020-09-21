import Vue from 'vue'
import App from './App'
// import router from "./router";
import {
  rGetWxJsapi
} from '@/netapi/wx'

import './libs/css/index.less'

Vue.config.productionTip = false

async function initConfig (ok) {
  if (ok) {
    const res = await rGetWxJsapi()

    if (res.code !== 0) {
      alert('签名失败')
    }

    const {
      appId,
      nonceStr,
      signature,
      timestamp
    } = res.data

    wx.config({
      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印
      appId, // 必填，公众号的唯一标识
      timestamp, // 必填，生成签名的时间戳
      nonceStr, // 必填，生成签名的随机串
      signature, // 必填，签名
      jsApiList: ['checkJsApi', 'updateAppMessageShareData', 'updateTimelineShareData'], // 必填，需要使用的JS接口列表
      openTagList: ['wx-open-launch-weapp'] // 可选，需要使用的开放标签列表，例如['wx-open-launch-app']
    })
  }
}

// initConfig(false)
initConfig(true)

new Vue({
  // router,
  render: (h) => h(App)
}).$mount('#app')
