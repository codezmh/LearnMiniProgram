// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'kobe',
    age:20,
    basketballStars:[
      {id:110, name:'kobe', age:28},
      {id:111, name:'james', age:26},
      {id:112, name:'joedan', age:30},
      {id:110, name:'curry', age:24}
    ],
    counter:0
  },
  handleIncrebtion() {
    //这种方法是错误的，因为它不能进行页面的渲染操作
    // this.data.counter++;
    // console.log(this.data.counter);
    //2.需要使用this.setData()函数
    this.setData({
      counter:this.data.counter + 1
    })
  },
  handleSubcrebtion() {
    this.setData({
      counter:this.data.counter - 1
    })
  }
})