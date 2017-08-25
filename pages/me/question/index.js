// pages/me/question/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 1.菜单栏数据
    cellList: [
      {
        text: '1.补贴比例如何才能提升？'
      }, 
      {
        text: '2.补贴比例为什么会下降？'
      },
      {
        text: '3.补贴金额如何计算出来？'
      },
      {
        text: '4.如何才能获得高额补贴？'
      },
      {
        text: '5.补贴是否可以申请提现？'
      },
      {
        text: '6.余额可否抵扣商品价格？'
      },
      {
        text: '7.怎样查询商品物流状态？'
      },
      {
        text: '8.收到产品有问题怎么办？'
      },
      {
        text: '9.退换货的流程是怎样的？'
      },
      {
        text: '10.如何联系商家客服人员？'
      }
    ],
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

  /**
   *  点击cell
   */
  cellTap: function (e) {

    switch (e.currentTarget.id) {

      case 0:
        my.navigateTo({ 
          url: 'q1/index'
        })
        break;

      case 1: my.navigateTo({ 
        url: 'q2/index'
      })
        break;

      case 2: my.navigateTo({ 
        url: 'q3/index'
      })
        break;

      case 3: my.navigateTo({ 
        url: 'q4/index'
      })
        break;

      case 4: my.navigateTo({
        url: 'q5/index'
      })
        break;

      case 5: my.navigateTo({
        url: 'q6/index'
      })
        break;

      case 6: my.navigateTo({
        url: 'q7/index'
      })
        break;

      case 7: my.navigateTo({
        url: 'q8/index'
      })
        break;

      case 8: my.navigateTo({
        url: 'q9/index'
      })
        break;

      case 9: my.navigateTo({
        url: 'q10/index'
      })
        break;


      default:
    }
  },
})