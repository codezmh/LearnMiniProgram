// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles:['新闻','娱乐','体育']
  },
  handleEventClick(event) {
    console.log("--------",event)
  },
  handleEventEnd(event) {
    console.log("+++++++++",event)
  },
  handleInner(event) {
    console.log("inner",event);
  },
  handleOuter(event) {
    console.log('outer',event);
    
  },
  handleItemClick(event) {
    //console.log(event);
    const index = event.target.dataset.index;
    const item =event.target.dataset.item;
    console.log(index , item);
    
  },


  // ----------  事件冒泡和事件捕获
  handleCaptureView1() {
    console.log('handleCaptureView1')
  },
  handleBindView1() {
    console.log('handleBindView1')
  },
  handleCaptureView2() {
    console.log('handleCaptureView2')
  },
  handleBindView2() {
    console.log('handleBindView2')
  },
  handleCaptureView3() {
    console.log('handleCaptureView3')
  },
  handleBindView3() {
    console.log('handleBindView3')
  }
})