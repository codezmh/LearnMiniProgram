//在app中可以定义全局变量,并且通过getApp()获取里面的全局变量
const app = getApp()
console.log(app.globalData.name);
console.log(app.globalData.age);

//注册一个页面示例
// pages/home/home.js
Page({
    
  /**
   * 2.页面的初始数据
   */
  data: {

  },
  //监听wxml的一些点击、移动等事件
  handleGetUserInfo(event) {
    console.log(event);
    
  },
  //--------1.监听页面的生命周期
  //页面被加载
  onLoad() {
    console.log('onLoad');
    //进行数据请求
    wx:wx.request({
      url:"",
    //通过success来返回结果
    })
  },
  //页面显示出来:在onready之前
  onShow() {
    console.log('onShow');
  },
  //页面隐藏
  onHide() {
    console.log('onHide');
  },
  //页面初次渲染完成
  onReady() {
    console.log('onReady');
  },
  //
  onUnload() {
    console.log('onUnload');
  },

  //4.------监听其他事件-----
  //页面的滚动
  onPageScroll() {

  },
  //监听页面滚动到底部
  onReachBottom() {

  }
  //监听下拉刷新
})