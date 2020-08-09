// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemClick(event) {
      //console.log("---------",event);
      //1.从事件对象中获取到index的值
      const index = event.currentTarget.dataset.index;

      //2.将index的值赋值给currentIndex
      this.setData({
        currentIndex:index,
      })

      //3.向外发送事件,并且告诉页面index和title
      this.triggerEvent('ItemClick',{index,title:this.properties.title[index]});
    }
  }
})
