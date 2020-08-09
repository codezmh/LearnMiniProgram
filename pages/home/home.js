// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter:0
  },
  handleIncrement() {
    // console.log("---------");
    this.setData({
      counter:this.data.counter +1,
    })
  },
  handleTabClick(event) {
    console.log(event);
    
  },
  handleIncrementCpn() {
    //1.获取到组件对象
    const sel = this.selectComponent("#my-sel");
    console.log(sel);

    // //2.直接通过setData修改。修改值(不合理)
    // sel.setData({
    //   counter :sel.data.counter + 10,
    // })
    
    //拿到组件的方法进行修改
    sel.incrementCpn(10);
  }

})