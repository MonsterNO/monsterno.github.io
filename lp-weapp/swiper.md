# swiper 轮播图

> 轮播图展示

## 引入
在app.json或index.json中引入组件
```json
"usingComponents": {
  "lp-swiper":"lp-weapp/swiper/index"
}
```

## 代码演示
```html
<lp-swiper type="card" list="{{banner}}" circular="true" mode="aspectFill"></lp-swiper>
```
```javascript
Page({
  data:{
      banner: [{
        type: 'image',
        url: "https://www.test.com/test.jpg",
        path: "/pages/test/index"
      },
      {
        type: 'video',
        url: "https://www.test.com/test.mp4",
        path: "/pages/test/index"
      },
      {
        type: 'image',
        url: "https://www.test.com/test.jpg",
        path: "/pages/test/index"
      }
    ],
  }
})
```

## 组件属性

| 属性 | 类型 | 默认值 | 说明 |
|:---:|:---:|:---:|---|
| type | String | init | 轮播图样式 |
| dots | boolean | true | 面板指示点 |
| dotsColor | string | rgba(0, 0, 0, .3) | 指示点颜色 |
| dotsActColor | string | #000 | 指示点选中颜色 |
| height | number | 360 | 轮播图高度 |
| autoplay | Boolean | true | 自动轮播 |
| interval	 | number | 5000 | 切换间隔 |
| circular | boolean | false | 无缝滑动 |
| showUrl | string | url | 显示的图片key |
| showPath | string | path | 跳转的页面路径key |
| list | Array |  | 轮播图列表 |
| mode | String | scaleToFill | 图片显示模式 |

## type值
| 值 | 说明 |
|:---:|:---:|
| init | 默认轮播 |
| card | 卡片式轮播 |

## list格式
| 值 | 说明 |
|:---:|:---:|
| type | 显示类型（image、video） |
| url | 显示地址（图片地址或视频地址） |
| path | 跳转页面地址 |