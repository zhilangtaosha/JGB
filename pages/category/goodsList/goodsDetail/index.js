// pages/category/goodsList/goodsDetail/index.js

const app = getApp()
var collected = false;
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
    //轮播图片数据
    imgUrls: [
      '../../../../image/m1.jpg',
      '../../../../image/m2.jpg',
      '../../../../image/m3.jpg'
    ],
    
    // 颜色数据
    colorBoxs: [
      {
        title: '白色'
      },
      {
        title: '黑色'
      },
      {
        title: '蓝色'
      },
      {
        title: '白色'
      },
      {
        title: '黑色'
      },
      {
        title: '蓝色'
      },
      {
        title: '白色'
      },
      {
        title: '黑色'
      },
      {
        title: '蓝色'
      }
    ],

    // 大小数据
    sizeBoxs: [
      {
        title: 'X'
      },
      {
        title: 'M'
      },
      {
        title: 'L'
      },
      {
        title: 'XXL'
      },
      {
        title: 'MM'
      },
      {
        title: 'XX'
      },
      {
        title: 'LXX'
      }
    ],

    showBadge:false,
    collectImg:'../../../../image/my_collecte@2x.png',
    currentColorIndex:0,
    currentSizeIndex: 0,
    shareBtn_W: (app.windowWidth-12)*0.15,
    robView_W: (app.windowWidth - 12)*0.35,
    pageIndex: 0
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
  
this.setData({
shareBtn_W: (app.windowWidth-12)*0.15,
 robView_W: (app.windowWidth - 12)*0.35,
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
  // 收藏
  collect:function(){

    collected = !collected
    var img = (collected == false) ? '../../../../image/my_collecte@2x.png' : '../../../../image/collected.png'

    this.setData({
      collectImg: img
    })

//提示
my.showToast({
  type: 'success',
  content: (collected == false) ? '取消收藏' : '已收藏',
  duration: 2000,
  success: () => {
    
  },
});


  },

  // 查看
  look:function(){
  my.navigateTo({
    url: '../../../me/rule/index',
  })
  },

  // 选择颜色
  tapColorBox: function (e) {

    this.setData({
      currentColorIndex: e.currentTarget.id,
    })
  },

  // 大小颜色
  tapSizeBox: function (e) {

    this.setData({
      currentSizeIndex: e.currentTarget.id,
    })
  },


  // 点击“购物车”
  buyCarAction: function () {

  //跳转到“我的”
my.switchTab({
  url: '../../../me/index',
  success:function(){
    // app.WxNotificationCenter.postNotificationName("buyCar") 
  }
})

 },

  // 点击“加入购物车”
  joinBuyCarAction: function () {
 
  //提示
my.showToast({
  type: 'success',
  content: '已加入购物车',
  duration: 1500,
  success: () => {
    
  },
});

  this.setData({
    showBadge:true
  })
  },


  // 点击"立即抢购"（非冒泡事件）
  robAction: function () {
    my.navigateTo({
      url: '../../../home/pay/index',
    })
  },
})