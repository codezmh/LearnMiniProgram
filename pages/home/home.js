import request from '../../network/request'
// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 3.带参数的post请求
    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   method:'post',
    //   data:{
    //     name:"zmh",
    //     age:21
    //   },
    //   success:res => {
    //     console.log(res);
    //   }
    // })
    // 2.get请求,并且带参数
    // wx.request({
    //     url: 'http://152.136.185.210:8000/api/z8/home/data',
    //     data:{
    //       type:"pop",
    //       page:1
    //     },
    //     success:(res) => {
    //       console.log(res);
    //   }
    // })
    // 1.普通的get请求
    // wx.request({
    //   url: 'http://152.136.185.210:8000/api/z8/recommend',
    //   success:(res) => {
    //     console.log(res);
    //   }
    // })

    //二、使用封装的request函数,promise防止回调地狱
    request({
      url:'http://152.136.185.210:8000/api/z8/home/data',
      data:{
        type:'pop',
        page:1
      }
    }).then(res => {
      console.log(res);
    })
  }
})