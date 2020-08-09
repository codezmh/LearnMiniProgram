// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:'时间你好',
    firstname:'kobe',
    lastname:'brayant',
    age:20,
    nowTime:new Date().toLocaleString(),
    isActive:false,
    isShow:true,
    score:50,
    movies:['大话西游','大鱼海棠','皇家宝藏','乘风破浪'],
    nums:[
      [1,2,3,4],
      [2,66,8,9],
      [44,6,8,10]
    ],
    letters:['a','b','c']
  },
  onLoad() {
    setInterval(() =>{
      this.setData({
        nowTime:new Date().toLocaleString(),
      },1000)
    })
  },
  handleTap() {
    this.setData({
      isActive:!this.data.isActive,
    }) 
  },
  handleSwitchShow() {
    this.setData({
      isShow:!this.data.isShow
    })
  },
  handleIncrement() {
    this.setData({
      score: this.data.score + 6
    })
  }
})