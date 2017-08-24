App({

  windowWidth: '',
  windowHeight: '',


  onLaunch() {

    //4. 获取用户系统信息：手机宽高
my.getSystemInfo({
  success: (res) => {
    this.windowWidth = res.windowWidth
        this.windowHeight = res.windowHeight
  },
});

  





    const { data } = my.getStorageSync({ key: 'logs' });
    const logs = data && data.logs ? data.logs : [];

    my.setStorageSync({
      key: 'logs',
      data: {
        logs: logs.concat([Date.now()]),
      },
    });
  },

  getUserInfo(cb) {

    if (this.globalData.userInfo) {
      typeof cb === 'function' && cb(this.globalData.userInfo);
    } else {
      my.getAuthCode({
        scopes: 'auth_user',
        success: (authcode) => {
          console.log(authcode);
          my.getAuthUserInfo({
            success: (userInfo) => {
              this.globalData.userInfo = userInfo;
              typeof cb === 'function' && cb(this.globalData.userInfo);
            },
          });
        },
      });
    }
  },


  globalData: {
    userInfo: null,
  },
});
