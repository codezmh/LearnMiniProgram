// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleShowToast() {
    wx.showToast({
      // title: '完成',
      title:"加载中",
      icon:'loading',
      duration:2000,
      mask:true,
      success: res =>{
        console.log(res);
      }
    })
  },
  handleShowModal() {
    wx.showModal({
      title:"确定吗？",
      content:"马上就红了",
      cancelColor: '#ff0000',
      cancelText:"退出",
      confirmText:"完成",
      success: res =>{
        //console.log(res)
        if(res.cancel) {
          console.log("用户点击了取消")
        }
        if(res.confirm) {
          console.log("用户点击了确认")
        }
      }
    })
  },
  handleShowLoading() {
    wx.showLoading({
      title:"加载中",
      mask:true,
    })
    setTimeout(() =>{
      wx.hideLoading();
    },3000)
  },
  handleShowAction() {
    wx.showActionSheet({
      itemList: ['相册','拍照'],
      itemColor:'red',
      success: res => {
        console.log(res)
      }
    }) 
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (options) {
    return {
      title:"时光记忆",
      imageUrl:"http://s3.mogucdn.com/mlcdn/c45406/170915_0a93207ci28kelh617k4hh62l65lb_640x960.jpg",
      path:"pages/about/about"
    }
  }
})