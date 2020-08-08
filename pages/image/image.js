// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgPath:''
  },
  handleChooseAlbum() {
    //系统API，让用户选择图片或拍照
    wx:wx.chooseImage({
      success: res => {
        // console.log(res);
        //获取图片地址
        const path = res.tempFilePaths[0];
        // 保存地址
        this.setData({
          imgPath:path,
        })
      }
    })
  },
  handleImageLoad() {
    console.log("图片加载完成了");
    
  }
})