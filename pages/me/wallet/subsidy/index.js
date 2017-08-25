const app = getApp()
const iconWidth = 60
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  list:[
    {
      title:"低价款单肩包",
      date:"2017-06-01 12:00",
    size:"30cm*30cm",
    totalPrice:"120",
    state:"成功",
    subsidy:"¥30",
    img:"../../../../image/my_teacher@2x.png"
  },
    {
      title: "低价款单肩包，特卖专场优惠价2",
      date: "2017-06-02 13:00",
      size: "30cm*30cm",
      totalPrice: "120",
      state: "成功",
      subsidy: "¥10",
      img:"../../../../image/m2.jpg"
    },
    {
      title: "低价款单肩包，特卖专场优惠价3",
      date: "2017-06-03 14:00",
      size: "30cm*30cm",
      totalPrice: "120",
      state: "成功",
      subsidy: "¥5",
      img:"../../../../image/m3.jpg"
    },
  ],


  titleWidth: app.windowWidth - iconWidth - 130,
  nodataImgMarginTop: (app.windowHeight - 40 - 150) / 2,
  nodataImgMarginLeft: (app.windowWidth - 150) / 2,


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
  // onShareAppMessage: function () {
  
  // }

})