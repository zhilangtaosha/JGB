// pages/category/goodsList/index.js
const app = getApp()
var priceUp = true
var sellUp = false

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
    // 1.菜单栏数据
    menuBoxs: [
      {
        title: '综合'
      },
      {
        title: '价格 🖕'
      },
      {
        title: '销量 🖕'
      }
    ],
    
    hotGoodsList: [
      {
        title: '火爆款单肩包',
        img: '../../../image/my_teacher@2x.png',
        sucSubsidy:'22',
        faiSubsidy: '13',
      },
      {
        title: '女性护脸霜',
        img: '../../../image/buy.png',
        sucSubsidy: '20',
        faiSubsidy: '11',
      },
      {
        title: '特价斜式挎包',
        img: '../../../image/bag.jpeg',
        sucSubsidy: '27',
        faiSubsidy: '15',
      },
      {
        title: '实用款单肩包',
        img: '../../../image/my_teacher@2x.png',
        sucSubsidy: '29',
        faiSubsidy: '13',
      }
    ],

    lowPriceGoodsList: [
      {
        title: '女性护脸霜',
        img: '../../../image/buy.png',
        sucSubsidy: '34',
        faiSubsidy: '23',
      },
      {
        title: '火爆款单肩包',
        img: '../../../image/my_teacher@2x.png',
        sucSubsidy: '28',
        faiSubsidy: '17',
      },
      {
        title: '特价斜式挎包',
        img: '../../../image/bag.jpeg',
        sucSubsidy: '29',
        faiSubsidy: '14',
      },
      {
        title: '实用款单肩包',
        img: '../../../image/my_teacher@2x.png',
        sucSubsidy: '32',
        faiSubsidy: '23',
      }
    ],

    bestSellGoodsList: [
      {
        title: '火爆款单肩包',
        img: '../../../image/my_teacher@2x.png',
        sucSubsidy: '19',
        faiSubsidy: '13',
      },
      {
        title: '特价斜式挎包',
        img: '../../../image/bag.jpeg',
        sucSubsidy: '22',
        faiSubsidy: '13',
      },
      {
        title: '女性护脸霜',
        img: '../../../image/buy.png',
        sucSubsidy: '52',
        faiSubsidy: '33',
      },
      {
        title: '实用款单肩包',
        img: '../../../image/my_teacher@2x.png',
        sucSubsidy: '32',
        faiSubsidy: '16',
      }
    ],

    // 搜索数据
    searchList:[
      { title: '单肩包1'},
      { title: '单肩包2'},
      { title: '单肩包3'},
    ],
    currentIndex: 0,
    priceUp: 1,
    sellUp: 1,
    focusInput:false,
    inputValue: "",
    // 3.box数据
    contentBoxWidth: (app.windowWidth - 20) / 2,
    picH: ((app.windowWidth - 20) / 2) * 1.8 - 110,
    nodataImgMarginTop: (app.windowHeight - 80 - 150) / 2,
    nodataImgMarginLeft: (app.windowWidth - 150) / 2,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    my.setNavigationBar({
        title:  options.title,
      success: (res) => {
        
      },
    });

     //弹出搜索背景veiw,隐藏菜单栏下面的界面
    if (options.title=="搜索"){
      this.setData({
        focusInput: true,
         currentIndex: 100
          })
    }
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

  // 点击菜单栏
  tapMenuBox: function (e) {

    priceUp = ! priceUp  //价格高低取反
    sellUp = ! sellUp    //销量高低取反
    let index = e.currentTarget.id //索引
    if (index==1 && priceUp==true){            //价格栏目
      this.data.menuBoxs[1].title = "价格 🖕"
    } else if (index == 1 && priceUp == false){
      this.data.menuBoxs[1].title = "价格 👇"
    } else if (index == 2 && sellUp == true) { //销量栏目
      this.data.menuBoxs[2].title = "销量 🖕"
    } else if (index == 2 && sellUp == false) {
      this.data.menuBoxs[2].title = "销量 👇"
    }

    this.setData({
      currentIndex: e.currentTarget.id,
      menuBoxs:this.data.menuBoxs
    })
  },

// 输入框开始聚焦
  bindfocus:function(){
    this.setData({
      focusInput: true
    })
  },

  //点击开始搜索
  bindconfirm:function(e){
    this.setData({
      focusInput:false,
      currentIndex:0
    })
    wx.showModal({
      title: '提示',
      content: '开始搜索啦',
    })
  },

// 点击搜索cell内容开始搜索
  tapSearchCell:function(e){
    this.setData({
      focusInput: false,
      currentIndex: 0,
      inputValue:e.currentTarget.dataset.celltitle
    })
    // wx.showModal({
    //   title: '提示',
    //   content: '开始搜索啦',
    // })
  },

  // 点击公告
  clickedAdvert: function () {
    my.navigateTo({
      url: 'buyRule/index',
    })
  },

  // 点击内容box跳转到商品详情页
  tapContentBox: function () {
    my.navigateTo({
      url: 'goodsDetail/index',
    })
  },


  // 加入抢购
  clickedJoinList: function () {
  my.navigateTo({
    url: '../../home/pay/index',
  })
  },


  catchtouchmove:function(e){

}
})