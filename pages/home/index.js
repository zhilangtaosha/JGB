
var app = getApp()
var navBarTitle = "首页";
Page({

  /**
   * 页面的初始数据
   */
  data: {

    //1. 轮播图片数据
     scrollImgs:[
      {
        pic: '../../image/f1.jpg',
        title: '19.9包邮'
      },
      {
        pic: '../../image/f2.jpg',
        title: '买一送一'
      },
      {
        pic: '../../image/f3.jpg',
        title: '特价卖场'
      },
    ],

// 菜单栏数据：
menuBox:[
{
    pic:'../../image/test.png',
    title:'19.9包邮'
},
{
  pic: '../../image/test.png',
  title: '买一送一'

},
{
  pic: '../../image/test.png',
  title: '品牌清仓'
},
{
  pic: '../../image/test.png',
  title: '特价卖场'
},
{
  pic: '../../image/test.png',
  title: '美食天下'
},
{
  pic: '../../image/test.png',
  title: '品质水果'
},
{
  pic: '../../image/test.png',
  title: '居家优品'
},
{
  pic: '../../image/test.png',
  title: '省钱妈咪'
}

],
 
     hotGoodsList: [
      {
        title: '修腿破洞牛仔裤',
        goodsPic:'../../image/m1.jpg',
        sucSubsidy:'20',
        faiSubsidy: '8',
        oldPrice: '219',
        nowPrice:'109'
      },
      {
        title: '收腰牛仔短裙',
        goodsPic: '../../image/m2.jpg',
        sucSubsidy: '30',
        faiSubsidy: '12',
        oldPrice: '248',
        nowPrice: '138'
      },
      {
        title: '黑框防晒墨镜',
        goodsPic: '../../image/m3.jpg',
        sucSubsidy: '12',
        faiSubsidy: '7',
        oldPrice: '159',
        nowPrice: '69'
      },
      {
        title: '宽松休闲T恤',
        goodsPic: '../../image/m4.jpg',
        sucSubsidy: '18',
        faiSubsidy: '10',
        oldPrice: '218',
        nowPrice: '99'
      }
    ],


    // 3.box数据
    created:true,
    currentIndex: 0,
    contentBoxWidth: (app.windowWidth - 20) / 2,
    picH: ((app.windowWidth - 20) / 2) * 1.8 - 110,
    nodataImgMarginTop: (app.windowHeight - 80 - 150) / 2,
    nodataImgMarginLeft: (app.windowWidth - 150) / 2,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    //添加监听器
    // var that = this
    // app.WxNotificationCenter.addNotification("paySuccess", that.testNotificationFn, that)
  },

// 接受通知：
  // testNotificationFn:function(){
  // //刷新数据
  // },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {


var that = this

   //监听网络状态，更改标题
// that.onNetworkStatusChange()


    //2.创建定时器，隔1s调用1次
  var time = setInterval(function () {

        that.setData({
          created: false
        })

    }, 5000)

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

    // my.setNavigationBarTitle({
    //   title: navBarTitle,
    // })
     

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
    // 移除通知
    // app.WxNotificationCenter.removeNotification("paySuccess", this)
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
   * 点击公告
   */
  clickedAdvert:function(){
    my.navigateTo({
      url: '../me/rule/index',
    })
  },

 /**
   * 点击滚动图
   */
  tapSwiper:function(e){
    let title = e.currentTarget.dataset.title
    my.navigateTo({
      url: '../category/goodsList/index?title=' + title,
    })
  },

   /**
   *点击菜单栏
   */
  tapMenuBox: function (e) {

  

    let title = e.currentTarget.dataset.title
    my.navigateTo({
      url: '../category/goodsList/index?title=' + title,
    })
  },

  /**
   * 点击内容box跳转到商品详情页
   */
  tapContentBox:function(){
        my.navigateTo({
          url: '../category/goodsList/goodsDetail/index',
        })
  },


   /**
   * 加入抢购（非冒泡事件）
   */
  clickedJoinList:function(){
      my.navigateTo({
        url: 'pay/index',
      })
 },

   /**
   * 点击“购物车”
   */
  clickedBuyImage: function () {

        // wx.navigateTo({
        //   url: 'buy/index',
        // })
  },



})



