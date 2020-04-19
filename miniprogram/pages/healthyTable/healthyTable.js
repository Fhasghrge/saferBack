import areaList from '../../utils/area'// 导入省市区数据
Page({
  data: {
    show: false, // 显式选择省市区
    areaList,
    Area: '当前所在地',
    detailAdd: '请输入详细地址',
    Date: '获取当前时间',
    DateGet: false,
    healths: [
      {
        id: 1,
        checked:false,
        info: '本人健康情况'
      },
      {
        id: 2,
        checked:false,
        info: '两周内有湖北旅行史或居住史'
      },
      {
        id: 3,
        checked:false,
        info: '两周内接触湖北返乡人员'
      },
      {
        id:4,
        checked:false,
        info: '接触疑似或确诊'
      },
      {
        id:5,
        checked:false,
        info: '政府隔离'
      },
      {
        id:6,
        checked:false,
        info: '医学隔离'
      },
      {
        id:7,
        checked:false,
        info: '是否确诊'
      },
      {
        id:8,
        checked:false,
        info: '是否在校'
      },
      {
        id:9,
        checked:false,
        info: '家庭成员健康情况' 
      },
    ],
    more: ''

  },
  showPopup() { // 打开省市区选择
    this.setData({show: true})
    console.log('弹出')
  },
  onClose() { // 关闭省市区选择
    this.setData({show: false})
    console.log('关闭')
  },
  confirmLoct(event) { // 确定省市区
    console.log(event.detail.values.map(item => item.name))
    let selectedArea = event.detail.values.map(item => item.name).join(' ')
    this.setData({Area: selectedArea})
    this.setData({show: false})
  },
  onCancel() { // 取消选择省市区
    this.setData({show: false})
  },
  onChange(event) { // 开关改变
    console.log(event)
  },
  showTime () { // 获取当前时间
    if(!this.data.DateGet){
      const date = new Date()
      this.setData({Date: this.data.toLocalString()})
      this.setData({DateGet: true})// 获取时间之后就禁止再次获取
    }
  },
  inputAdd(event) { // 获取详细地址
    this.setData({detailAdd:event.detail})
  },
  inputMore(event) { // 获取备注
    this.setData({more: event.detail})
  }
})