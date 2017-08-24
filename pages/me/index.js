
//  不要在 onLaunch 的时候调用 getCurrentPage()此时 page 还没有生成。 
// getCurrentPage是获取当前页面的实例对象。
const app = getApp()

Page({

  data: {

    iconUrl: "../../image/m3.jpg",
    name: "昵称",

    // 1.菜单栏数据
    itemList: [
      {
        icon: '../../image/my_order@2x.png',
        text: '订单',
        unit:'个',
        color:'#BA55D3',
        num:2
      },   {
        icon: '../../image/my_wallet@2x.png',
        text: '补贴',
        unit: '元',
        color: '#CD853F',
        num: 25
      },
      {
        icon: '../../image/my_collecte@2x.png',
        text: '收藏',
        unit: '个',
        color: 'red',
        num: 5
      }, {
        icon: '../../image/my_about@2x.png',
        text: '消息',
        unit: '条',
        color: '#008B00',
        num: 4
      }
    ],

    // 1.菜单栏数据
    cellList: [ 
      {
        text: '购物车 ☞'
      },
      {
        text: '抢购规则'
      },
      {
        text: '意见反馈'
      },
      {
        text: '常见问题'
      }
    ],
  },



  /**
   * 页面的初始数据
   */

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    var that = this

    // my.getUserInfo({
    //   withCredentials: false,
    //   success: function (res) {
    //     that.setData({
    //       iconUrl: res.userInfo.avatarUrl,
    //       name: res.userInfo.nickName
    //     }) 

    //   }, fail: function (res) {
    //     //登录失败

        that.setData({
          iconUrl: "../../image/m4.jpg",
          name: "昵称"
        }) 
    // }
    // })

    // 头像
    // var iconUrl = (app.isHaveUserInfo == true) ? app.userInfo.avatarUrl :'../../image/my_teacher@2x.png'

// 昵称
    // var name = (app.isHaveUserInfo == true) ? app.userInfo.nickName:'昵称'
    // that.setData({
    //   iconUrl: iconUrl,
    //   name: name
    // }) 

    //添加支付成功监听器
    // app.WxNotificationCenter.addNotification("paySuccess", that.jumpOrderListPage, that)
  //添加购物车监听器
    // app.WxNotificationCenter.addNotification("buyCar", that.jumpBuyCarPage, that)
  },

  /**
   * 接收去订单列表页面通知
   */
  jumpOrderListPage: function () {
  my.navigateTo({ 
    url: 'order/index?fromPay=1',
  })
  },

  /**
 * 接收去购物车页面通知
 */
  jumpBuyCarPage: function () {
    my.navigateTo({ //跳转到订单列表
      url: 'buy/index',
    })
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
    // 移除通知
    // app.WxNotificationCenter.removeNotification("paySuccess", this) 
    // app.WxNotificationCenter.removeNotification("buyCar", this)
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


  // 触摸头像事件：
  tapImageView: function () {
    
    my.updateShareMenu({
      withShareTicket: true,
      success() {
      }
    })

  },

  // 点击item：
  itemTap: function (e) {
    
    switch (e.currentTarget.id) {

      case 0:
       my.navigateTo({ //订单
         url: 'order/index?fromPay=0'
      })

        break;

      case 1: my.navigateTo({ //钱包
        url: 'wallet/index'
      })
        break;

      case 2: my.navigateTo({ //收藏
        url: 'collect/index'
      })
        break;

      case 3: my.navigateTo({ //消息
        url: 'msg/index'
      })
        break;

      default:
    }
  },


// 点击cell
  cellTap:function(e){
 
    switch (e.currentTarget.id) {

      case 0: 
      my.navigateTo({ //购物车
        url: 'buy/index'
      })
        break;

      case 1: my.navigateTo({ //抢购规则
        url: 'rule/index'
      })
        break;

      case 2: my.navigateTo({ //意见反馈
        url: 'suggest/index'
      })
        break;

      case 3: my.navigateTo({ //常见问题
        url: 'question/index'
      })
        break;


      default:
    }
  },

})






