const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
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
  
  // },

  // 表单提交
  bindFormSubmit: function (e) {
    // console.log(e.detail.value.phone)
    // console.log(e.detail.value.orderid)

    // if (e.detail.value.phone.length == 0 || e.detail.value.orderid.length == 0) {
    //   app.tip.showError("请输入完整信息")
    //   return;
    // }
    // app.tip.showSuccess("提交成功")
       my.showToast({
       type:'success',
      content: '提交成功', // 文字内容
       duration: 1500,
      success: (res) => {
         my.navigateBack({})
      },
    });
    
  }
})