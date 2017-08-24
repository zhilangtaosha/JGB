
//  不要在 onLaunch 的时候调用 getCurrentPage()此时 page 还没有生成。 
// getCurrentPage是获取当前页面的实例对象。

const app = getApp()

Page({

  data: {

  
  // “购”数据
    buyList: [
      {
        title: "特价款单肩包",
        size: "M码",
        goodsid: "14084788008",
        sucSubsidy: "30",
        faiSubsidy: "20",
        oldPrice: "150",
        totalPrice: "100",
        img:"../../../image/my_teacher@2x.png"
      },
      {
        title: "斜跨式单肩包",
        size: "M码",
        goodsid: "98084788008",
        sucSubsidy: "30",
        faiSubsidy: "20",
        oldPrice: "150",
        totalPrice: "100",
        img: "../../../image/bag.jpeg"
      }
 
    ],

    // 3.提示图数据
    nodataImgMarginTop: (app.windowHeight - 40 - 150) / 2,
    nodataImgMarginLeft: (app.windowWidth - 150) / 2,
 },

  // 方法： ---------------------------
  onLoad: function (option) {
    // 生命周期函数--监听页面加载
  },
  onReady: function (option) {
    // 生命周期函数--监听页面初次渲染完成



  },


  onShow: function (option) {
    // 生命周期函数--监听页面显示

    // console.log(option)

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



  // 点击cell跳转到商品详情
  tapBuyCell:function(e){

    var pages = getCurrentPages()
    var contained = false
  //判断之前是否包含订单详情页了
    for( var i in pages){
      if (pages[i].route == "pages/category/goodsList/goodsDetail/index") {
        contained = true
      }
    }

    if (contained == true){ //返回
      my.navigateBack({})
    }else{  //push
      my.navigateTo({
        url: '../../category/goodsList/goodsDetail/index',
      })
    }
  },

//支付：
  pay:function(){
my.navigateTo({
  url: '../../home/pay/index',
})
  },


// 移除商品
tapDelete:function(){
wx.showModal({
  title: '提示',
  content: '您确定要从购物车移除此商品吗？',
})
}

})


