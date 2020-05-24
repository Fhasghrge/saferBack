// pages/search/search.js
var i=0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
  checked:false,
   visble:true,
   name:"",
   age:"",
   xueyuan:"",
   idistrue:"否",
   xcistrue:"否",
   jkma:"否",
   ishealth:"否",
   issp:"否",
   isbb:"否"
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
  onSearch:function(e){
//接入后端搜索功能





//结束接入

    //测试代码
    var sname=e.detail;
    console.log(sname)
     this.setData({
       name:sname,
       visble:false
     })
     //测试结束
  },
  onChange:function(){
    if(i%2){
    this.setData({
      checked:false
    })
  }
  else{  
    this.setData({
      checked:true
    })
    wx.showToast({
      title: '审批完成',
    })
//在此处调用后台更新学生的审批情况





//调用结束
  }
  i++;
}
})