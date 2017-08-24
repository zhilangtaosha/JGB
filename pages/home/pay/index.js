// pages/home/buy/pay/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsAddress:'收货地址'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

    // 姓名
   var that = this

   my.getStorage({
     key: 'address',
     success: function(res) {
       that.setData({
         goodsAddress: res.data

       })

     },
   })


  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {


  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },


   /**
   * 点击新增收货地址
   */
  addAddress:function(e){
    //2个参数：①授权参数  ②授权成功后的回调方法
    var that = this
    // app.tip.getSetting('scope.address', function (res) {
    //   if (res == "yes") {
    //     that.editAddress()
    //   }
    // })

  },

/**
   * 编辑收货地址
   */
  editAddress: function () {

  var that = this

  //api:获取默认收货地址api
    my.chooseAddress({
      success: function (res) {
        // console.log(res.userName)
        // console.log(res.postalCode)
        // console.log(res.provinceName)
        // console.log(res.cityName)
        // console.log(res.countyName)
        // console.log(res.detailInfo)
        // console.log(res.nationalCode)
        // console.log(res.telNumber)

        // 地址
        var a = res.provinceName + res.cityName + res.countyName + res.detailInfo

        // 地址串
        var address = res.userName + res.telNumber + '\n' + a

        //缓存
        wx.setStorage({
          key: "address",
          data: address
        })

         // 刷新地址
        that.setData({
          goodsAddress: address
        })

      },fail:function(res){
      }
    })
  },



 /**
   * 提交订单
   */
  commitOrder:function(){
//     wx.navigateTo({
//    url: 'robTip/index',
//  })



    //2.跳转
 my.switchTab({
   url: '../../me/index',
   success: function (res) { //发送通知
  // app.WxNotificationCenter.postNotificationName("paySuccess")
      }
    })



  }


})