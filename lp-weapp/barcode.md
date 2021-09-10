# barcode 条形码生成

> 微信小程序生成条形码

## 引入
在app.json或index.json中引入组件
```json
"usingComponents": {
  "lp-barcode":"lp-weapp/barcode/index"
}
```

## 代码演示
```html
<lp-barcode lp-class="barcode" number="{{ number }}" options="{{ options }}" width="200" height="100" />
```
```javascript
Page({
  data:{
    number: '9787115335524',
    options: {
      number: true,
      onValid() {
        console.log('onValid')
      },
      onInvalid() {
        console.log('onInvalid')
      },
      onSuccess() {
        console.log('onSuccess')
      },
      onError() {
        console.log('onError')
      },
    }
  },
})
```

## 组件属性

| 属性 | 类型 | 默认值 | 说明 |
|:---:|:---:|:---:|---|
| canvasId | string | lp-barcode | canvas 组件的唯一标识符 |
| number | number |  | 条形码的数值 |
| width | number | 200 | canvas 组件的宽度 |
| height | number | 100 | canvas 组件的高度 |
| options | object |  | 配置项 |

## options配置项

| 值 | 说明 | 类型 | 默认值 |
|:---:|:---:|:---:|:---:|
| number | 是否显示数字 | Boolean | true |
| prefix | 是否显示国家前缀 | Boolean | true |
| color | 条形码的颜色 | string | black |
| debug | 是否开启调试 | Boolean | false |
| onValid | 验证条形码合法的回调函数 | function |  |
| onInvalid | 验证条形码不合法的回调函数 | function |  |
| onSuccess | 接口调用成功的回调函数 | function |  |
| onError | 接口调用失败的回调函数 | function |  |