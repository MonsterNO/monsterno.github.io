# Vcode 验证码

> 用于展现验证码。

## 引入
在app.json或index.json中引入组件
```json
"usingComponents": {
  "lp-vcode":"lp-weapp/vcode/index"
}
```

## 代码演示
```html
<lp-vcode canvas-id="custom-canvas" bg-color="#e6f6ff" font-color="#165189" has-point="{{ true }}" has-line="{{ true }}"
  bind:change="onChange" />
```
```javascript
Page({
  data:{
    
  },
  onChange(e) {
    console.log(`验证码：${e.detail.value}`)
  },
})
```

## 组件属性

| 属性 | 类型 | 默认值 | 说明 |
|:---:|:---:|:---:|---|
| str | String | ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 | 验证码范围 |
| num | number | 6 | 验证码长度 |
| width | number | 120 | 画布宽度 |
| height | number | 40 | 画布高度 |
| bgColor | string |  | 画布背景色 |
| fontColor	 | String |  | 画布字体颜色 |
| hasPoint | boolean | true | 是否显示干扰点 |
| hasLine | boolean | true | 是否显示干扰线 |
| bind:change | function |  | 点击事件的回调函数 |