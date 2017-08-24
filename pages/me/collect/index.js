
//  不要在 onLaunch 的时候调用 getCurrentPage()此时 page 还没有生成。 
// getCurrentPage是获取当前页面的实例对象。

const app = getApp()

Page({

  data: {

    collectList: [
      {
        img:'../../../image/m1.jpg',
        title: "修身破洞牛仔裤",
        size: "大码",
        goodsid: "14084788008",
        subsidy: "7",
        oldPrice: "157",
        totalPrice: "120",
      },
      {
        img: '../../../image/m4.jpg',
        title: "白色女性T恤",
        size: "30cm*30cm",
        goodsid: "14084788008",
        subsidy: "5",
        oldPrice: "190",
        totalPrice: "110",
      },
      {
        img: '../../../image/m3.jpg',
        title: "黑色遮阳墨镜",
        size: "30cm*30cm",
        goodsid: "14084788008",
        subsidy: "12",
        oldPrice: "140",
        totalPrice: "118",
      },
      {
        img: '../../../image/buy.png',
        title: "女性护脸霜",
        size: "瓶装",
        goodsid: "14084788008",
        subsidy: "9",
        oldPrice: "100",
        totalPrice: "80",
      },
      {
        img: '../../../image/bag.jpeg',
        title: "特价款单肩包",
        size: "30cm*30cm",
        goodsid: "14084788008",
        subsidy: "23",
        oldPrice: "199",
        totalPrice: "130",
      }

    ],


    // 3.提示图数据
    nodataImgMarginTop: (app.windowHeight - 40 - 150) / 2,
    nodataImgMarginLeft: (app.windowWidth - 150) / 2,
  },

  // 方法： ---------------------------
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
  },
  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成

  },
  onShow: function () {
    // 生命周期函数--监听页面显示

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
  // onShareAppMessage: function() {
  //   // 用户点击右上角分享
  //   return {
  //     title: 'title', // 分享标题
  //     desc: 'desc', // 分享描述
  //     path: 'path' // 分享路径
  //   }
  // },



// 点击了cell
  tapCell:function(){
    my.navigateTo({
      url: '../../category/goodsList/goodsDetail/index',
    })
  }


})


