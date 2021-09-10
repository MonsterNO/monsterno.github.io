# qrcode 二维码生成

> 微信小程序生成二维码工具

## 引入
在app.json或index.json中引入组件
```json
"usingComponents": {
  "lp-qrcode":"lp-weapp/qrcode/index"
}
```

## 代码演示
```html
<lp-qrcode id="qrcode" data="{{ value }}" fg-color="{{ fgColor }}" width="200" height="200"
  whiteSpace="{{ whiteSpace }}" bind:click="previewImage" />
```
```javascript
Page({
  data:{
    value: 'https://github.com/wux-weapp/wux-weapp',
    fgColor: 'black',
    whiteSpace: [10],
  },
    previewImage() {
    // 在自定义组件下，当前组件实例的 this，以操作组件内 <canvas> 组件
    const that = this.selectComponent('#qrcode')
    wx.canvasToTempFilePath({
      canvasId: 'lp-qrcode',
      success: (res) => {
        wx.previewImage({
          urls: [res.tempFilePath],
        })
      },
    }, that)
  },
})
```

## 组件属性

| 属性 | 类型 | 默认值 | 说明 |
|:---:|:---:|:---:|---|
| data | String |  | 文本内容 |
| typeNumber | number | -1 | 类型 |
| errorCorrectLevel | number | 2 | 误差校正等级 |
| width | number | 200 | canvas 组件的宽度 |
| height | number | 200 | canvas 组件的高度 |
| whiteSpace | number | 0 | 四周留白 |
| fgColor	 | String | black | 前景色 |
| bgColor | String | white | 背景色 |
| bind:click | Function |  | 点击事件 |