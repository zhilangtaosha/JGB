//index.js
//获取应用实例
var app = getApp()
Page({

  data: {

    // 1.菜单栏数据
    menuBoxs: [
      {
        title: '百货',
        orderStatus: -1
      },
      {
        title: '电器',
        orderStatus: 0
      },
      {
        title: '美妆',
        orderStatus: 2
      },
      {
        title: '母婴',
        orderStatus: 3
      },
      {
        title: '美食',
        orderStatus: 2
      },
      {
        title: '数码',
        orderStatus: 3
      },
      {
        title: '配件',
        orderStatus: 0
      },
      {
        title: '水果',
        orderStatus: 2
      },
      {
        title: '玩具',
        orderStatus: 3
      },
      {
        title: '办公',
        orderStatus: 2
      }
    ],


    contentBoxs: [
      {
        title: '面部护肤',
        img:'../../image/m3.jpg'
      },
      {
        title: '洗发洗护',
        img: '../../image/m1.jpg'
      },
      {
        title: '身体护肤',
        img: '../../image/m2.jpg'
      },
      {
        title: '口腔护理',
        img: '../../image/m4.jpg'
      },
      {
        title: '香水彩妆',
        img: '../../image/m4.jpg'
      },
      {
        title: '清洁用品',
        img: '../../image/m1.jpg'
      },
      {
        title: '手霜护理',
        img: '../../image/m3.jpg'
      },
      {
        title: '脚底保健',
        img: '../../image/m4.jpg'
      }
    ],

    // 3.box数据
    currentIndex: 0,
    orderStatus: -1,
    nodataImgShow: true,
    menuHeight: 0,
    contentBoxWidth: (app.windowWidth - 100 - 4) / 2
  },

  // 方法： ---------------------------
  onLoad: function (options) {
    // 生命周期函数--监听页面加载

 

  },
  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成
    this.setData({
      contentBoxWidth:(app.windowWidth - 100 - 4) / 2
    })
    var that = this
my.getSystemInfo({
  success: function(res) {
    console.log(res)
    that.setData({
      menuHeight:res.windowHeight-40
    })
  },
})

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


  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数
  },

// 开始搜索
  bindfocus: function (e) {
      my.navigateTo({
        url: 'goodsList/index?title=' +'搜索',
      })
  },

  // 点击菜单栏box
  clickedMenuBox: function (e) {

    this.setData({
      currentIndex: e.currentTarget.id,
      orderStatus: e.currentTarget.dataset.orderstatus
    })

  },

  // 查看抢购规则
  lookBuyRule: function () {
    my.navigateTo({
      url: 'buyRule/index',
    })
  },


  //点击内容栏box
  clickedContentBox: function (e) {
    let title = e.currentTarget.dataset.title
   my.navigateTo({
     url: 'goodsList/index?title=' + title,
   })
  },

})