var text = ''

Page({
  data:{
  
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
   
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
   
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
  
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
 
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
  
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
 
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
   
  },
//   onShareAppMessage: function() {
//     // 用户点击右上角分享
//     return {
//       title: 'title', // 分享标题
//       desc: 'desc', // 分享描述
//       path: 'path' // 分享路径
//     }
//   }
textareaInputAction:function(e){
  // function：输入框输入就会调用
   text = e.detail.value
},

commitAction:function(e){
// function：提交事件

if (text==''){
 
  my.showToast({
  type: 'fail',
  content: '请输入您的意见',
  duration: 2000,
  success: () => {
    
  },
});
  return
} 


   my.showToast({
  type: 'success',
  content: '提交成功',
  duration: 1000,
  success: () => {
    // 返回
    my.navigateBack({
      delta: 1
     
    })
  },
});


  
}
})