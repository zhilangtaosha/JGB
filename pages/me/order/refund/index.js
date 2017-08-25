// pages/me/order/refund/index.js

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs:[
      "../../../../image/load.jpg",
      "../../../../image/load.jpg",
      "../../../../image/load.jpg"
    ],
    img1:"../../../../image/load.jpg"
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

/**
   * 图片1
   */
  tapImg:function(e){
    var that = this
    var a = e.currentTarget.id
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'],
      success: function (res) {

        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.data.imgs[a] = res.tempFilePaths[0]
        that.setData({
          imgs: that.data.imgs
        })
      }
    })
  },

 
 /**
   * 提交
   */
  bindFormSubmit:function(e){

var that = this
    // var orderPriceInputT = e.detail.value.orderPriceInput
    // var textareaT = e.detail.value.textarea

    // if (textareaT.length == 0) {
    //   my.showToast({
    //     type: 'fail',
    //     content: '请填写退款原因', // 文字内容
    //     success: (res) => {
          
    //     },
    //   });
      
    //   return
    // }

        // 上传头像
        // wx.uploadFile({
        //   url: 'http://112.74.128.53:9997/upLoadFiles.asmx/upLoadOneChunkForIOS',
        //   filePath: res.tempFilePaths[0], 
        //   name: 'refundimg',
        //   formData: {
        //     // 'user': 'test'
        //   },
        //   header: {
        //     'content-type': 'multipart/form-data'
        //   },
        //   success: function (res) {
        //     var data = res.data

        //   }, fail: function (res) {
        //     var data = res.data
        //     //do something
        //   }
        // })




    my.showToast({
      type: 'success',
      content: '提交成功', // 文字内容
       duration: 1500,
      success: (res) => {
        my.navigateBack({})
      },
    });
    

  }
})