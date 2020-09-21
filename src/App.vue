<template>
  <div class="bgc-DB3F2C">
    <!-- 大图 -->
    <div class="w-100vw h-84vw bgr-n bgp-50p-100p bgsz-a-100p" :style="{ backgroundImage: 'url(./image/activity/0001.jpg?v=' + currentHour + ')' }">
      <div class="pos-f z-11 r-0 t-10 w-46 h-20 bgr-n bgp-100p-50p bgsz-a-100p" :style="{ backgroundImage: 'url(./image/activity/rule-entry.png?v=' + currentHour + ')' }" @click="handleShow('showRule')"></div>
      <div class="pos-f z-11 r-0 t-40 w-46 h-20 bgr-n bgp-100p-50p bgsz-a-100p" :style="{ backgroundImage: 'url(./image/activity/share-entry.png?v=' + currentHour + ')' }" @click="handleShow('showShare')"></div>
    </div>
    <!-- 分享图 -->
    <div class="pos-f t-0 b-0 l-0 r-0 z-21" :class="showShare ? '' : 'd-n'">
      <div class="pos-a t-0 b-0 l-0 r-0 bgc-0-55p"></div>
      <div class="w-44 h-44 pos-a z-41 t-40 r-0 bgr-n bgp-50p-50p bgsz-19-19" :style="{ backgroundImage: 'url(./image/activity/close-share.png?v=' + currentHour + ')' }" @click="handleShow('showShare')"></div>
      <div class="pos-a z-31 l-0 r-0 t-0 b-125 d-f ai-c jc-c">
        <img class="w-232 h-412" :src="'./image/activity/share.jpg?v=' + currentHour" alt="share" />
      </div>
      <div class="pos-a z-41 b-0 l-0 r-0 bgc-fff bdtlrs-9 bdtrrs-9 ta-c d-f ai-c h-125">
        <div class="f-1" @click="handleShow('showForward', ['showShare'])">
          <div class="h-46 bgr-n bgp-50p-50p bgsz-a-100p" :style="{ backgroundImage: 'url(./image/activity/forward.png?v=' + currentHour + ')' }"></div>
          <div class="mt-7 fz-12">分享</div>
        </div>
        <div class="f-1">
          <div class="h-46 bgr-n bgp-50p-50p bgsz-a-100p" :style="{ backgroundImage: 'url(./image/activity/press.png?v=' + currentHour + ')' }"></div>
          <div class="mt-7 fz-12">长按图片下载</div>
        </div>
      </div>
    </div>
    <!-- 转发 -->
    <div class="pos-f t-0 b-0 l-0 r-0 z-51 bgc-0-55p bgr-n bgp-100p-0 bgsz-100p-a" :class="showForward ? '' : 'd-n'" :style="{ backgroundImage: 'url(./image/activity/share-tips.png?v=' + currentHour + ')' }" @click="handleShow('showForward')"></div>
    <!-- 规则 -->
    <div class="pos-f t-0 b-0 l-0 r-0 z-21" :class="showRule ? '' : 'd-n'">
      <div class="pos-a t-0 b-0 l-0 r-0 bgc-0-55p"></div>
      <div class="pos-a z-31 l-23 r-23 t-142 bdrs-9 bgc-fff">
        <div class="w-44 h-44 pos-a t-0 r-0 bgr-n bgp-50p-50p bgsz-20-20" :style="{ backgroundImage: 'url(./image/activity/close-rule.png?v=' + currentHour + ')' }" @click="handleShow('showRule')"></div>
        <div>
          <div class="pt-15 lh-44 fz-15 fw-500 ta-c">活动规则</div>
          <div class="fz-10 plr-15 pb-30 lh-17">
            <div class="mb-4">1.活动开始时间：2020年9月22日   8:00</div>
            <div class="mb-4">2.活动截止时间：2020年10月16日 24:00</div>
            <div class="mb-4">3.活动范围：包括不仅限佳兆业各集团关联业务会员、客户及佳兆业员工</div>
            <div class="mb-4">4.活动优惠名额有限，先到先得，售完即止</div>
            <div class="mb-4">5.活动产品售后服务均由对应产品提供方服务</div>
            <div class="mb-4">6.优惠及优惠券按商品提供方说明使用，每次限用一张，只能购物使用，不退换，不转让，不兑换成现金</div>
            <div class="mb-4">7.选中满意商品后，请及时完成支付，超时未完成支付，系统会自动取消订单.</div>
            <div class="mb-4">8.活动解释权最终归佳悦会所有.</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 茶叶集团 -->
    <div class="pt-56 pb-17 bgr-n bgp-50p-0 bgsz-100p-a" :style="{ backgroundImage: 'url(./image/activity/tea/0001.png?v=' + currentHour + ')' }">
      <div class="ml-11 mr-11 ptb-2 plr-6 pos-r bgc-FDF2EA group">
        <div class="pos-r">
          <div class="chunks">
            <div class="chunk-t"></div>
            <div class="chunk-b"></div>
            <div class="chunk-l"></div>
            <div class="chunk-r"></div>
            <div class="chunk-t-l">
              <div class="chunk-t-l-inner"></div>
            </div>
            <div class="chunk-t-r">
              <div class="chunk-t-r-inner"></div>
            </div>
            <div class="chunk-b-l">
              <div class="chunk-b-l-inner"></div>
            </div>
            <div class="chunk-b-r">
              <div class="chunk-b-r-inner"></div>
            </div>
          </div>
          <div class="ptb-20">
            <div class="d-f">
              <div class="f-1"></div>
              <div class="pos-r">
                <div class="w-128 h-220 bgr-n bgp-50p-50p bgsz-100p-a" :style="{ backgroundImage: 'url(./image/activity/tea/0002.jpg?v=' + currentHour + ')' }" @click="pageOpenDispatch({ appId: 'wxcf4d50dd4343d978', path: 'pages/packagesGoods/goodsDetail/index?goodsId=BF815588AA68417FB990704BA1259374' })"></div>
              </div>
              <div class="f-1"></div>
              <div class="pos-r">
                <div class="w-128 h-220 bgr-n bgp-50p-50p bgsz-100p-a" :style="{ backgroundImage: 'url(./image/activity/tea/0003.jpg?v=' + currentHour + ')' }" @click="pageOpenDispatch({ appId: 'wxcf4d50dd4343d978', path: 'pages/packagesGoods/goodsDetail/index?goodsId=8B5B834057D14BC0A9832EEA176BDB0D' })"></div>
              </div>
              <div class="f-1"></div>
            </div>
            <div class="h-15"></div>
            <div class="d-f">
              <div class="f-1"></div>
              <div class="pos-r">
                <div class="w-128 h-220 bgr-n bgp-50p-50p bgsz-100p-a" :style="{ backgroundImage: 'url(./image/activity/tea/0004.jpg?v=' + currentHour + ')' }" @click="pageOpenDispatch({ appId: 'wxcf4d50dd4343d978', path: 'pages/packagesGoods/goodsDetail/index?goodsId=A6FDF34F44294DFA96022338C3645110' })"></div>
              </div>
              <div class="f-1"></div>
              <div class="pos-r">
                <div class="w-128 h-220 bgr-n bgp-50p-50p bgsz-100p-a" :style="{ backgroundImage: 'url(./image/activity/tea/0005.jpg?v=' + currentHour + ')' }" @click="pageOpenDispatch({ appId: 'wxcf4d50dd4343d978', path: 'pages/packagesGoods/goodsDetail/index?goodsId=6C767A7D86B84066B9FDD2C6FEBA1873' })"></div>
              </div>
              <div class="f-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 嘉美轩 -->
    <div class="pt-56 pb-17 bgr-n bgp-50p-0 bgsz-100p-a" :style="{ backgroundImage: 'url(./image/activity/jiameixuan/0001.png?v=' + currentHour + ')' }">
      <div class="ml-11 mr-11 ptb-2 plr-6 pos-r bgc-FDF2EA group">
        <div class="pos-r">
          <div class="chunks">
            <div class="chunk-t"></div>
            <div class="chunk-b"></div>
            <div class="chunk-l"></div>
            <div class="chunk-r"></div>
            <div class="chunk-t-l">
              <div class="chunk-t-l-inner"></div>
            </div>
            <div class="chunk-t-r">
              <div class="chunk-t-r-inner"></div>
            </div>
            <div class="chunk-b-l">
              <div class="chunk-b-l-inner"></div>
            </div>
            <div class="chunk-b-r">
              <div class="chunk-b-r-inner"></div>
            </div>
          </div>
          <div class="ptb-20">
            <div class="d-f jc-c">
              <div class="pos-r">
                <div class="w-266 h-125 bgr-n bgp-50p-50p bgsz-100p-100p" :style="{ backgroundImage: 'url(./image/activity/jiameixuan/0002.jpg?v=' + currentHour + ')' }" @click="pageOpenDispatch({ appId: 'wx32584f59c899f8c5', path: 'pages/packagesGoods/goodsDetail/index?id=D79D9B68E1944A8687DA241D6E2FCDB9' })"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 地产集团 -->
    <div class="pt-56 pb-17 bgr-n bgp-50p-0 bgsz-100p-a" :style="{ backgroundImage: 'url(./image/activity/dichan/0001.png?v=' + currentHour + ')' }">
      <div class="ml-11 mr-11 ptb-2 plr-6 pos-r bgc-FDF2EA group">
        <div class="pos-r">
          <div class="chunks">
            <div class="chunk-t"></div>
            <div class="chunk-b"></div>
            <div class="chunk-l"></div>
            <div class="chunk-r"></div>
            <div class="chunk-t-l">
              <div class="chunk-t-l-inner"></div>
            </div>
            <div class="chunk-t-r">
              <div class="chunk-t-r-inner"></div>
            </div>
            <div class="chunk-b-l">
              <div class="chunk-b-l-inner"></div>
            </div>
            <div class="chunk-b-r">
              <div class="chunk-b-r-inner"></div>
            </div>
          </div>
          <div class="ptb-20">
            <div class="d-f jc-c">
              <div class="pos-r">
                <div class="w-266 h-125 bgr-n bgp-50p-50p bgsz-100p-100p" :style="{ backgroundImage: 'url(./image/activity/dichan/0002.jpg?v=' + currentHour + ')' }" @click="pageOpen({ url: '/pages/packagesGoods/goodsDetail/index?goodsId=4CE8634FCCE846B7887E57636BCD4B02' })"></div>
              </div>
            </div>
            <div class="h-8"></div>
            <div class="d-f jc-c">
              <div class="pos-r">
                <div class="w-266 h-125 bgr-n bgp-50p-50p bgsz-100p-100p" :style="{ backgroundImage: 'url(./image/activity/dichan/0003.jpg?v=' + currentHour + ')' }" @click="pageOpen({ url: '/pages/packagesGoods/goodsDetail/index?goodsId=34E3F16AFDF74157BFFC3654929C490A' })"></div>
              </div>
            </div>
            <div class="h-8"></div>
            <div class="d-f jc-c">
              <div class="pos-r">
                <div class="w-266 h-125 bgr-n bgp-50p-50p bgsz-100p-100p" :style="{ backgroundImage: 'url(./image/activity/dichan/0004.jpg?v=' + currentHour + ')' }" @click="pageOpenDispatch({ appId: 'wx2dae8f0832d67d15', path: 'areas/mobile/Project/Detail/Index?id=159' })"></div>
              </div>
            </div>
            <div class="h-8"></div>
            <div class="d-f jc-c">
              <div class="pos-r">
                <div class="w-266 h-125 bgr-n bgp-50p-50p bgsz-100p-100p" :style="{ backgroundImage: 'url(./image/activity/dichan/0005.jpg?v=' + currentHour + ')' }" @click="pageOpenDispatch({ appId: 'wx2dae8f0832d67d15', path: 'areas/mobile/Project/Detail/Index?id=116' })"></div>
              </div>
            </div>
            <div class="h-8"></div>
            <div class="d-f jc-c">
              <div class="pos-r">
                <div class="w-266 h-125 bgr-n bgp-50p-50p bgsz-100p-100p" :style="{ backgroundImage: 'url(./image/activity/dichan/0006.jpg?v=' + currentHour + ')' }" @click="pageOpenDispatch({ appId: 'wx2dae8f0832d67d15', path: 'areas/mobile/Project/Detail/Index?id=182' })"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 商业集团 -->
    <div class="pt-56 pb-17 bgr-n bgp-50p-0 bgsz-100p-a" :style="{ backgroundImage: 'url(./image/activity/shangye/0001.png?v=' + currentHour + ')' }">
      <div class="ml-11 mr-11 ptb-2 plr-6 pos-r bgc-FDF2EA group">
        <div class="pos-r">
          <div class="chunks">
            <div class="chunk-t"></div>
            <div class="chunk-b"></div>
            <div class="chunk-l"></div>
            <div class="chunk-r"></div>
            <div class="chunk-t-l">
              <div class="chunk-t-l-inner"></div>
            </div>
            <div class="chunk-t-r">
              <div class="chunk-t-r-inner"></div>
            </div>
            <div class="chunk-b-l">
              <div class="chunk-b-l-inner"></div>
            </div>
            <div class="chunk-b-r">
              <div class="chunk-b-r-inner"></div>
            </div>
          </div>
          <div class="ptb-20">
            <div class="d-f">
              <div class="f-1"></div>
              <div class="pos-r">
                <div class="w-128 h-220 bgr-n bgp-50p-50p bgsz-100p-a" :style="{ backgroundImage: 'url(./image/activity/shangye/0002.jpg?v=' + currentHour + ')' }" @click="pageOpen({ url: '/pages/packagesGoods/goodsDetail/index?goodsId=026C3B1F889D4B8B9766FB88D704400E' })"></div>
              </div>
              <div class="f-1"></div>
              <div class="pos-r">
                <div class="w-128 h-220 bgr-n bgp-50p-50p bgsz-100p-a" :style="{ backgroundImage: 'url(./image/activity/shangye/0003.jpg?v=' + currentHour + ')' }" @click="pageOpen({ url: '/pages/packagesGoods/goodsDetail/index?goodsId=40D6E3FE87474102BE7605EF8A5E86E2' })"></div>
              </div>
              <div class="f-1"></div>
            </div>
            <div class="h-15"></div>
            <div class="d-f">
              <div class="f-1"></div>
              <div class="pos-r">
                <div class="w-128 h-220 bgr-n bgp-50p-50p bgsz-100p-a" :style="{ backgroundImage: 'url(./image/activity/shangye/0004.jpg?v=' + currentHour + ')' }" @click="pageOpen({ url: '/pages/packagesGoods/goodsDetail/index?goodsId=7B4A1ABBD241453E86B410EB562B0C32' })"></div>
              </div>
              <div class="f-1"></div>
              <div class="pos-r">
                <div class="w-128 h-220 bgr-n bgp-50p-50p bgsz-100p-a" :style="{ backgroundImage: 'url(./image/activity/shangye/0005.jpg?v=' + currentHour + ')' }" @click="pageOpen({ url: '/pages/packagesGoods/goodsDetail/index?goodsId=D6ECF38260C74FDFB3F2F0EE316F7938' })"></div>
              </div>
              <div class="f-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 文体集团 -->
    <div class="pt-56 pb-17 bgr-n bgp-50p-0 bgsz-100p-a" :style="{ backgroundImage: 'url(./image/activity/wenti/0001.png?v=' + currentHour + ')' }">
      <div class="ml-11 mr-11 ptb-2 plr-6 pos-r bgc-FDF2EA group">
        <div class="pos-r">
          <div class="chunks">
            <div class="chunk-t"></div>
            <div class="chunk-b"></div>
            <div class="chunk-l"></div>
            <div class="chunk-r"></div>
            <div class="chunk-t-l">
              <div class="chunk-t-l-inner"></div>
            </div>
            <div class="chunk-t-r">
              <div class="chunk-t-r-inner"></div>
            </div>
            <div class="chunk-b-l">
              <div class="chunk-b-l-inner"></div>
            </div>
            <div class="chunk-b-r">
              <div class="chunk-b-r-inner"></div>
            </div>
          </div>
          <div class="ptb-20">
            <div class="d-f jc-c">
              <div class="pos-r">
                <div class="w-266 h-164 bgr-n bgp-50p-50p bgsz-100p-100p" :style="{ backgroundImage: 'url(./image/activity/wenti/0002.jpg?v=' + currentHour + ')' }" @click="pageOpen({ url: '/pages/packagesGoods/goodsDetail/index?goodsId=0E1880CA81A645D78226528C2991FACA' })"></div>
              </div>
            </div>
            <div class="h-8"></div>
            <div class="d-f jc-c">
              <div class="pos-r">
                <div class="w-266 h-164 bgr-n bgp-50p-50p bgsz-100p-100p" :style="{ backgroundImage: 'url(./image/activity/wenti/0003.jpg?v=' + currentHour + ')' }" @click="pageOpenDispatch({ appId: 'wxf4daf231d0fe7f4b', path: 'subPages/coupon/couponList/couponList' })"></div>
              </div>
            </div>
            <div class="h-8"></div>
            <div class="d-f jc-c">
              <div class="pos-r">
                <div class="w-266 h-164 bgr-n bgp-50p-50p bgsz-100p-100p" :style="{ backgroundImage: 'url(./image/activity/wenti/0004.jpg?v=' + currentHour + ')' }" @click="pageOpenDispatch({ appId: 'wxf4daf231d0fe7f4b', path: 'subPages/sellCard/sellCardList/sellCardList?isParent=false&venueId=1430' })"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 酒店集团 -->
    <div class="pt-56 pb-17 bgr-n bgp-50p-0 bgsz-100p-a" :style="{ backgroundImage: 'url(./image/activity/jiudian/0001.png?v=' + currentHour + ')' }">
      <div class="ml-11 mr-11 ptb-2 plr-6 pos-r bgc-FDF2EA group">
        <div class="pos-r">
          <div class="chunks">
            <div class="chunk-t"></div>
            <div class="chunk-b"></div>
            <div class="chunk-l"></div>
            <div class="chunk-r"></div>
            <div class="chunk-t-l">
              <div class="chunk-t-l-inner"></div>
            </div>
            <div class="chunk-t-r">
              <div class="chunk-t-r-inner"></div>
            </div>
            <div class="chunk-b-l">
              <div class="chunk-b-l-inner"></div>
            </div>
            <div class="chunk-b-r">
              <div class="chunk-b-r-inner"></div>
            </div>
          </div>
          <div class="ptb-20">
            <div class="d-f jc-c">
              <div class="pos-r">
                <div class="w-266 h-125 bgr-n bgp-50p-50p bgsz-100p-100p" :style="{ backgroundImage: 'url(./image/activity/jiudian/0002.jpg?v=' + currentHour + ')' }" @click="pageOpenWebView({ url: 'https://mall.kaisatech.com/mall/column/article/F9F099520AA4479BAF58687A91837182' })"></div>
              </div>
            </div>
            <div class="h-8"></div>
            <div class="d-f jc-c">
              <div class="pos-r">
                <div class="w-266 h-125 bgr-n bgp-50p-50p bgsz-100p-100p" :style="{ backgroundImage: 'url(./image/activity/jiudian/0003.jpg?v=' + currentHour + ')' }" @click="pageOpenWebView({ url: 'https://mall.kaisatech.com/mall/column/article/DB3F9133DCD341879645D005E2DE5742' })"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 航运集团 -->
    <div class="pt-56 pb-17 bgr-n bgp-50p-0 bgsz-100p-a" :style="{ backgroundImage: 'url(./image/activity/hangyun/0001.png?v=' + currentHour + ')' }">
      <div class="ml-11 mr-11 ptb-2 plr-6 pos-r bgc-FDF2EA group">
        <div class="pos-r">
          <div class="chunks">
            <div class="chunk-t"></div>
            <div class="chunk-b"></div>
            <div class="chunk-l"></div>
            <div class="chunk-r"></div>
            <div class="chunk-t-l">
              <div class="chunk-t-l-inner"></div>
            </div>
            <div class="chunk-t-r">
              <div class="chunk-t-r-inner"></div>
            </div>
            <div class="chunk-b-l">
              <div class="chunk-b-l-inner"></div>
            </div>
            <div class="chunk-b-r">
              <div class="chunk-b-r-inner"></div>
            </div>
          </div>
          <div class="ptb-20">
            <div class="d-f jc-c">
              <div class="pos-r">
                <div class="w-266 h-125 bgr-n bgp-50p-50p bgsz-100p-100p" :style="{ backgroundImage: 'url(./image/activity/hangyun/0002.jpg?v=' + currentHour + ')' }" @click="pageOpenWebView({ url: 'https://mall.kaisatech.com/mall/column/article/573AF8F378D24064AC6A4D61E0939C25' })"></div>
              </div>
            </div>
            <div class="h-8"></div>
            <div class="d-f jc-c">
              <div class="pos-r">
                <div class="w-266 h-125 bgr-n bgp-50p-50p bgsz-100p-100p" :style="{ backgroundImage: 'url(./image/activity/hangyun/0003.jpg?v=' + currentHour + ')' }" @click="pageOpenWebView({ url: 'https://mall.kaisatech.com/mall/column/article/33EAE6AB50E647E58D261AF5D6C5A757' })"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 扶贫公司 -->
    <div class="pt-56 pb-17 bgr-n bgp-50p-0 bgsz-100p-a" :style="{ backgroundImage: 'url(./image/activity/fuping/0001.png?v=' + currentHour + ')' }">
      <div class="ml-11 mr-11 ptb-2 plr-6 pos-r bgc-FDF2EA group">
        <div class="pos-r">
          <div class="chunks">
            <div class="chunk-t"></div>
            <div class="chunk-b"></div>
            <div class="chunk-l"></div>
            <div class="chunk-r"></div>
            <div class="chunk-t-l">
              <div class="chunk-t-l-inner"></div>
            </div>
            <div class="chunk-t-r">
              <div class="chunk-t-r-inner"></div>
            </div>
            <div class="chunk-b-l">
              <div class="chunk-b-l-inner"></div>
            </div>
            <div class="chunk-b-r">
              <div class="chunk-b-r-inner"></div>
            </div>
          </div>
          <div class="ptb-20">
            <div class="d-f">
              <div class="f-1"></div>
              <div class="pos-r">
                <div class="w-128 h-220 bgr-n bgp-50p-50p bgsz-100p-a" :style="{ backgroundImage: 'url(./image/activity/fuping/0002.jpg?v=' + currentHour + ')' }" @click="pageOpen({ url: '/pages/packagesGoods/goodsDetail/index?goodsId=9221FC5FB330421AB02358D5FFA82A1B' })"></div>
              </div>
              <div class="f-1"></div>
              <div class="pos-r">
                <div class="w-128 h-220 bgr-n bgp-50p-50p bgsz-100p-a" :style="{ backgroundImage: 'url(./image/activity/fuping/0003.jpg?v=' + currentHour + ')' }" @click="pageOpen({ url: '/pages/packagesGoods/goodsDetail/index?goodsId=5CB8BE95FB424D36BBCDE92A54603DF1' })"></div>
              </div>
              <div class="f-1"></div>
            </div>
            <div class="h-15"></div>
            <div class="d-f">
              <div class="f-1"></div>
              <div class="pos-r">
                <div class="w-128 h-220 bgr-n bgp-50p-50p bgsz-100p-a" :style="{ backgroundImage: 'url(./image/activity/fuping/0004.jpg?v=' + currentHour + ')' }" @click="pageOpen({ url: '/pages/packagesGoods/goodsDetail/index?goodsId=15EB1EFAAB4F456FB5D7D62D455BADEE' })"></div>
              </div>
              <div class="f-1"></div>
              <div class="pos-r">
                <div class="w-128 h-220 bgr-n bgp-50p-50p bgsz-100p-a" :style="{ backgroundImage: 'url(./image/activity/fuping/0005.jpg?v=' + currentHour + ')' }" @click="pageOpen({ url: '/pages/packagesGoods/goodsDetail/index?goodsId=C1F984DB6FDA413185E0766A17D5D9BE' })"></div>
              </div>
              <div class="f-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 深足俱乐部 -->
    <div class="pt-56 pb-17 bgr-n bgp-50p-0 bgsz-100p-a" :style="{ backgroundImage: 'url(./image/activity/shenzu/0001.png?v=' + currentHour + ')' }">
      <div class="ml-11 mr-11 ptb-2 plr-6 pos-r bgc-FDF2EA group">
        <div class="pos-r">
          <div class="chunks">
            <div class="chunk-t"></div>
            <div class="chunk-b"></div>
            <div class="chunk-l"></div>
            <div class="chunk-r"></div>
            <div class="chunk-t-l">
              <div class="chunk-t-l-inner"></div>
            </div>
            <div class="chunk-t-r">
              <div class="chunk-t-r-inner"></div>
            </div>
            <div class="chunk-b-l">
              <div class="chunk-b-l-inner"></div>
            </div>
            <div class="chunk-b-r">
              <div class="chunk-b-r-inner"></div>
            </div>
          </div>
          <div class="ptb-20">
            <div class="d-f jc-c">
              <div class="pos-r">
                <div class="w-266 h-125 bgr-n bgp-50p-50p bgsz-100p-100p" :style="{ backgroundImage: 'url(./image/activity/shenzu/0002.jpg?v=' + currentHour + ')' }" @click="pageOpen({ url: '/pages/packagesGoods/goodsDetail/index?goodsId=C7C025178D7249D4B55479E3F338C7D0' })"></div>
              </div>
            </div>
            <div class="h-15"></div>
            <div class="d-f">
              <div class="f-1"></div>
              <div class="pos-r">
                <div class="w-128 h-220 bgr-n bgp-50p-50p bgsz-100p-a" :style="{ backgroundImage: 'url(./image/activity/shenzu/0004.jpg?v=' + currentHour + ')' }" @click="pageOpen({ url: '/pages/packagesGoods/goodsDetail/index?goodsId=BD384EE1944D4263B1459C97B6E30DE1' })"></div>
              </div>
              <div class="f-1"></div>
              <div class="pos-r">
                <div class="w-128 h-220 bgr-n bgp-50p-50p bgsz-100p-a" :style="{ backgroundImage: 'url(./image/activity/shenzu/0005.jpg?v=' + currentHour + ')' }" @click="pageOpen({ url: '/pages/packagesGoods/goodsDetail/index?goodsId=1DBD3EC413944991A4B12530280CAA05' })"></div>
              </div>
              <div class="f-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 财富集团 -->
    <div class="pt-56 pb-17 bgr-n bgp-50p-0 bgsz-100p-a" :style="{ backgroundImage: 'url(./image/activity/caifu/0001.png?v=' + currentHour + ')' }">
      <div class="ml-11 mr-11 ptb-2 plr-6 pos-r bgc-FDF2EA group">
        <div class="pos-r">
          <div class="chunks">
            <div class="chunk-t"></div>
            <div class="chunk-b"></div>
            <div class="chunk-l"></div>
            <div class="chunk-r"></div>
            <div class="chunk-t-l">
              <div class="chunk-t-l-inner"></div>
            </div>
            <div class="chunk-t-r">
              <div class="chunk-t-r-inner"></div>
            </div>
            <div class="chunk-b-l">
              <div class="chunk-b-l-inner"></div>
            </div>
            <div class="chunk-b-r">
              <div class="chunk-b-r-inner"></div>
            </div>
          </div>
          <div class="ptb-20">
            <div class="d-f jc-c">
              <div class="pos-r">
                <div class="w-266 h-125 bgr-n bgp-50p-50p bgsz-100p-100p" :style="{ backgroundImage: 'url(./image/activity/caifu/0002.jpg?v=' + currentHour + ')' }" @click="pageOpen({ url: '/pages/packagesGoods/goodsDetail/index?goodsId=75A9773798374CD991D8AE74907004AC' })"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-f ai-c jc-c h-75 bgc-FDF2EA">
      <div class="w-100p h-25 bgr-n bgp-50p-50p bgsz-a-100p" style="background-image: url(./image/logos/foot.png);"></div>
    </div>
  </div>
</template>

<script>
import { currentHour } from '@/utilities/time'
import { supportLaunchWeapp } from '@/utilities/wx'
import { pageOpen, pageOpenWebView, pageOpenDispatch } from '@/utilities/page'
// import VConsole from 'vconsole'

// var vconsole = new VConsole()
// console.log(vconsole)

export default {
  name: 'App',
  data: function () {
    return {
      currentHour: currentHour() + 1,
      supportLaunchWeapp: supportLaunchWeapp(),
      showRule: false,
      showShare: false,
      showForward: false,
      tea0002: false,
      tea0003: false,
      tea0004: false,
      tea0005: false
    }
  },
  components: {},
  mounted: function () {
    // this.initData()
  },
  methods: {
    initData: function () {
      // 自定义“分享给朋友”及“分享到QQ”按钮的分享内容
      wx.ready(function () {
        // 需在用户可能点击分享按钮前就先调用
        wx.updateAppMessageShareData({
          title: '中秋国庆送福利啦', // 分享标题
          desc: '中秋国庆送福利啦', // 分享描述
          link: 'https://mall.kaisatech.com/national-day/', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: 'https://mall.kaisatech.com/national-day/image/activity/0001.jpg', // 分享图标
          success: function () {
            // 设置成功
          }
        })
      })

      // 自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容（1.4.0）
      wx.ready(function () {
        // 需在用户可能点击分享按钮前就先调用
        wx.updateTimelineShareData({
          title: '中秋国庆送福利啦', // 分享标题
          link: 'https://mall.kaisatech.com/national-day/', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: 'https://mall.kaisatech.com/national-day/image/activity/0001.jpg', // 分享图标
          success: function () {
            // 设置成功
          }
        })
      })
    },
    handleShow: function (key, hideKeys) {
      this[key] = !this[key]

      if (hideKeys && hideKeys.length > 0) {
        hideKeys.forEach(hideKey => {
          this[hideKey] = false
        })
      }
    },
    pageOpen,
    pageOpenWebView,
    pageOpenDispatch
  }
}
</script>
