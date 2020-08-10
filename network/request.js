export default function request(option) {
  //使用promise方法
  return new Promise((resolve,reject) => {
    wx.request({
      url: option.url,
      method:option.method || 'get',
      data: option.data || {},
      success: resolve,
      fail:reject,
    })
  })
  // return new Promise((resolve,reject) => {
  //   wx.request({
  //     url: option.url,
  //     method:option.method || 'get',
  //     data: option.data || {},
  //     success: (res) =>{
  //       resolve(res);
  //     },
  //     fail:err => {
  //       reject(err);
  //     }
  //   })
  // })
}