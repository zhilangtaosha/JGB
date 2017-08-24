
//  不要在 onLaunch 的时候调用 getCurrentPage()此时 page 还没有生成。 
// getCurrentPage是获取当前页面的实例对象。

// "pages/me/order/index"

let app = getApp()
let iconWidth = 80
var second = 1200;//定义剩余时间, 必须用时间戳.单位为秒
var time1 = function () { };//定时器
var created = false;  //是否创建过定时器
Page({

  data: {

arr:[],


    // 1.菜单栏数据
    menuBoxs: [
      {
        title: '待发货'
      },
      {
        title: '已发货'
      },
      {
        title: '退换中'
      },
      {
        title: '已完成'
      }
    ],

//待发货list:
    waitList: [
      {
        img:"../../../image/m3.jpg",
        title: "限量版遮阳墨镜",
        size: "黑色边框",
        goodsid: "14084788008",
        sucSubsidy: "30",
        faiSubsidy: "20",
        time:"2017-08-09 10:00",
        orderid:"472892020020",
        oldPrice: "150",
        totalPrice: "100",
        state: '抢购中'
      },
      {
        img: "../../../image/bag.jpeg",
        title: "斜式单肩包",
        size: "学生款",
        goodsid: "98084788008",
        sucSubsidy: "30",
        faiSubsidy: "16",
        time: "2017-08-09 10:00",
        orderid: "472892020020",
        oldPrice: "168",
        totalPrice: "128",
         state: '抢购成功'
      },
      {
        img: "../../../image/m2.jpg",
        title: "限量版T恤",
        size: "M码",
        goodsid: "98084788008",
        sucSubsidy: "32.5",
        faiSubsidy: "15.6",
        time: "2017-08-09 10:00",
        orderid: "472892020020",
        oldPrice: "196",
        totalPrice: "116",
        state: '抢购失败'
      }

    ],

   //已发货list:
    sendList: [
      {
        img: "../../../image/m1.jpg",
        title: "修腿破洞牛仔",
        size: "大码",
        goodsid: "14084788008",
        sucSubsidy: "32.9",
        faiSubsidy: "16",
        time: "2017-08-09 10:00",
        orderid: "472892020020",
        oldPrice: "180",
        totalPrice: "120",
      },
      {
        img: "../../../image/m3.jpg",
        title: "限量版T恤",
        size: "M码",
        goodsid: "14084788008",
        sucSubsidy: "30",
        faiSubsidy: "20",
        time: "2017-08-09 10:00",
        orderid: "472892020020",
        oldPrice: "180",
        totalPrice: "130",
      }
    ],

    //退换中list:
    refundList: [
      {
        img: "../../../image/buy.png",
        title: "女性护手霜",
        size: "瓶装",
        goodsid: "14084788008",
        sucSubsidy: "30",
        faiSubsidy: "20",
        time: "2017-08-09 10:00",
        orderid: "472892020020",
        oldPrice: "160",
        totalPrice: "100",
        state: '退款审核中'
      },
      {
        img: "../../../image/m4.jpg",
        title: "特价款白色T恤",
        size: "小码",
        goodsid: "14084788008",
        sucSubsidy: "23",
        faiSubsidy: "12",
        time: "2017-08-09 10:00",
        orderid: "472892020020",
        oldPrice: "189",
        totalPrice: "120",
        state: '换货审核中'
      },
      {
        img: "../../../image/bag.jpeg",
        title: "限量款单肩包",
        size: "学生款",
        goodsid: "14084788008",
        sucSubsidy: "40",
        faiSubsidy: "25",
        time: "2017-08-09 10:00",
        orderid: "472892020020",
        oldPrice: "269",
        totalPrice: "189",
        state: '已同意退款'
      },
      {
        img: "../../../image/m1.jpg",
        title: "修腿破洞牛仔裤",
        size: "M码",
        goodsid: "14084788008",
        sucSubsidy: "40",
        faiSubsidy: "30",
        time: "2017-08-09 10:00",
        orderid: "472892020020",
        oldPrice: "170",
        totalPrice: "100",
        state: '已同意换货'
      },
      {
        img: "../../../image/m2.jpg",
        title: "休闲白色T恤",
        size: "M码",
        goodsid: "14084788008",
        sucSubsidy: "24",
        faiSubsidy: "18",
        time: "2017-08-09 10:00",
        orderid: "472892020020",
        oldPrice: "150",
        totalPrice: "100",
        state: '已拒绝退款'
      },
      {
        img: "../../../image/buy.png",
        title: "斜挎式单肩包",
        size: "40cm*44cm",
        goodsid: "14084788008",
        sucSubsidy: "20",
        faiSubsidy: "10",
        time: "2017-08-09 10:00",
        orderid: "472892020020",
        oldPrice: "170",
        totalPrice: "120",
        state: '已拒绝换货'
      }
    ],


    //已完成list:
    finishList: [
    {
        img: "../../../image/bag.jpeg",
        title: "特价单肩包",
      size: "30cm*44cm",
      goodsid: "14084788008",
      sucSubsidy: "30",
      faiSubsidy: "20",
      time: "2017-08-09 10:00",
      orderid: "472892020020",
      oldPrice: "150",
      totalPrice: "100",
     },
      {
        img: "../../../image/m2.jpg",
    title: "修身白色T恤",
    size: "小码",
    goodsid: "14084788008",
    sucSubsidy: "30",
    faiSubsidy: "20",
    time: "2017-08-09 10:00",
    orderid: "472892020020",
    oldPrice: "160",
    totalPrice: "120",
  }
    ],

//倒计时数据
    d: '',
    h: '',
    m: '',
    s: '',
    created:false,

    // 3.box数据
    currentIndex: 0,
    titleWidth: app.windowWidth - iconWidth - 60,
    scrollviewH: app.windowHeight - 40,
    nodataImgMarginTop: (app.windowHeight - 40 - 150) / 2,
    nodataImgMarginLeft: (app.windowWidth - 150) / 2,
  },

  // 方法： ---------------------------
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
 
    var that = this
   //1.是否从支付页面跳转过来
    if (options.fromPay == 1){
      second = 1200
    }

    //2.支付页面跳过来或创建过定时器就可以读秒
    if (options.fromPay == 1 || created == true){
      clearInterval(time1) //清除上一个定时器
      created = true       //已创建定时器
      that.setData({
        created:true
      })
      

      //2.创建定时器，隔1s调用1次
      time1 = setInterval(function () {
        if (second == 0) {

          clearInterval(time1) //清除定时器
          created = false     //恢复为未创建状态 
          that.setData({
            created: false
          })
        } else {
          that.promote() //调用定时器
        }
      }, 1000)

    }



  },

// func:定时器
  promote: function () {

    var that = this
    
    //自减
    second--;

    //计算数据
    var d = Math.floor((second / 3600) / 24);
    var h = Math.floor((second - d * 24 * 3600) / 3600);
    var m = Math.floor((second - d * 24 * 3600 - h * 3600) / 60);
    var s = (second - h * 3600) % 60;

    //更新数据
    that.setData({
      d: d,
      h: h,
      m: m,
      s: s
    })
 
  },

  onReady: function (options) {
    // 生命周期函数--监听页面初次渲染完成

  },


  onShow: function () {
    // 生命周期函数--监听页面显示
    // wx.showShareMenu({
    //   withShareTicket: true
    // })
  },
  onHide: function () {
    // 生命周期函数--监听页面隐藏

  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载
    
  },
  onPullDownRefresh: function () {
    // 页面相关事件处理函数--监听用户下拉动作
    // wx.showNavigationBarLoading()
  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: '二人抢商城', // 分享标题
      desc: '50%的概率，抢购成功或失败都有补贴', // 分享描述
      path: '/pages/home/index', // 分享路径
       success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
    
  },


  // 点击菜单栏
  tapMenuBox: function (e) {
    this.setData({
      currentIndex: e.currentTarget.id,
    })
  },



  // 申请换货
  exchange: function (e) {
    my.navigateTo({
      url: 'exchange/index',
    })
  },

  // 我要退款
  refund: function (e) {
    wx.navigateTo({
      url: 'refund/index',
    })
  },

// 去寄快递
  sendDelivery:function(e){
    my.navigateTo({
      url: 'delivery/index',
    })
  },

  // 点击cell跳转到订单详情
tapCell:function(e){
my.navigateTo({
  url: 'orderDetail/index',
})
},


})


