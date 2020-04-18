// pages/id/id.js
// const regeneratorRuntime = require('regenerator-runtime')
Page({
  mixins: [require("../../utils/themeChanged")],
  /**
   * 页面的初始数据
   */
  // mixins: [require('../../mixin/themeChanged')],
  data: {
    topTips: true,
    files: [],
    sname: '',
    sid: '',
    sxy: '',
    sch: '',
    bs: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //   this.setData({
    //     error: '这是一个错误提示'
    // })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: async function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        });
        try {
          const invokeRes = await wx.serviceMarket.invokeService({
            service: 'wx79ac3de8be320b71',
            api: 'OcrAllInOne',
            data: {
              // 用 CDN 方法标记要上传并转换成 HTTP URL 的文件
              img_url: new wx.serviceMarket.CDN({
                type: 'filePath',
                filePath: res.tempFilePaths[0],
              }),
              data_type: 3,
              ocr_type: 8
            },
          })
          that.setData({
            sname: invokeRes.data.ocr_comm_res.items[3].text,
            sid: invokeRes.data.ocr_comm_res.items[7].text,
            sxy: invokeRes.data.ocr_comm_res.items[5].text,
            sch: invokeRes.data.ocr_comm_res.items[0].text,
            bs: invokeRes.data.ocr_comm_res.items[1].text
          });
          console.log('invokeService success', invokeRes)
          wx.showModal({
            title: 'success',
            content: JSON.stringify(invokeRes),
          })
        } catch (err) {
          console.error('invokeService fail', err)
          wx.showModal({
            title: 'fail',
            content: err,
          })
        }

      },
    })
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  },
  scan: function () {
    wx.chooseImage({
      count: 1,
      success: async function (res) {
        try {
          const invokeRes = await wx.serviceMarket.invokeService({
            service: 'wx79ac3de8be320b71',
            api: 'OcrAllInOne',
            data: {
              // 用 CDN 方法标记要上传并转换成 HTTP URL 的文件
              img_url: new wx.serviceMarket.CDN({
                type: 'filePath',
                filePath: res.tempFilePaths[0],
              }),
              data_type: 3,
              ocr_type: 8
            },
          })

          console.log('invokeService success', invokeRes)
          wx.showModal({
            title: 'success',
            content: JSON.stringify(invokeRes),
          })
        } catch (err) {
          console.error('invokeService fail', err)
          wx.showModal({
            title: 'fail',
            content: err,
          })
        }
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
})