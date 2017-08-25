// pages/me/wallet/card/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    tag:0,

    List:[
      {
        title: "建设银行",
        num: "1948477595055"
      },
      {
        title: "工商银行",
        num: "5859477595055"
      }

    ]
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
  onShareAppMessage: function () {

  },

  // 添加
  add:function(){
    my.navigateTo({
      url: 'addCard/index',
    })
  },

  // 提现
  tixian:function(){
my.showToast({
  content: '已提交', // 文字内容
  type:'success',
  duration:'1500',
  success: (res) => {
    my.navigateBack({ });
  },
});
    
  },

  // 选中银行卡
  tapCard:function(e){
    this.setData({
      tag: e.currentTarget.dataset.tag
    })
    
  }
})