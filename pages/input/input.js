// pages/input/input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleInput(event) {
    console.log("用户输入内容",event);
    
  },
  handleFocus(event) {
    console.log("用户获得焦点",event);
    
  },
  handleBlur(event) {
    console.log("用户失去焦点",event);
    
  }
})