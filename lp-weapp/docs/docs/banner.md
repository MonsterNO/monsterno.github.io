# Banner 轮播图

轮播图展示，支持图片、视频、腾讯视频插件，视频和插件不能混用。

## 引入

在 app.json 或 index.json 中引入组件

```js
"usingComponents": {
  "lp-banner":"lp-weapp/banner/index"
}
```

## 代码演示

### 基础使用

```wxml
<lp-banner list="{{list}}"></lp-banner>
```

```js
data(){
    list:[
        {
            url:'',
            type:'video',
            path:'/pages/index/index'
        },
        {
            url:'',
            type:'image',
            path:'/pages/index/index'
        }
    ]
}
```

![](https://www.hualigs.cn/image/645472ea9943a.jpg)

### 使用腾讯视频

通过 `isTxv` 属性即可使用腾讯视频，需要引入腾讯视频插件，不能同普通视频混用

```wxml
<lp-banner list="{{list}}" isTxv></lp-banner>
```

```js
data(){
    list:[
        {
            url:'e3327ace1m7',
            type:'video',
            path:'/pages/index/index'
        },
        {
            url:'e3327ace1m7',
            type:'image',
            path:'/pages/index/index'
        }
    ]
}
```

- 引用插件

在 `app.json` 中引入插件

```json
  "plugins": {
    "tencentvideo": {
      "version": "2.1.15",
      "provider": "wxa75efa648b60994b"
    }
  }
```

- 获取腾讯视频vid

找到一个腾讯视频地址是这样的：https://v.qq.com/x/page/q3509rmtz0u.html，那么q3509rmtz0u这个就是vid，不会的可以自行搜索获取腾讯视频vid。

![](https://www.hualigs.cn/image/645475959b6b6.jpg)

## API

| 参数         | 说明                 | 类型    | 默认值            | 备注                          |
| ------------ | -------------------- | ------- | ----------------- | ----------------------------- |
| dots         | 是否显示面板指示点   | boolean | true              |                               |
| dotsColor    | 指示点颜色           | color   | rgba(0, 0, 0, .3) |                               |
| dotsActColor | 指示点选中颜色       | color   | \#000             |                               |
| height       | 轮播图高度           | Number  | 360               | 单位是rpx                     |
| autoplay     | 是否自动切换         | boolean | false             |                               |
| interval     | 切换间隔             | Number  | 5000              |                               |
| circular     | 是否采用衔接滑动     | boolean | false             |                               |
| list         | 展示数据             | array   | []                |                               |
| mode         | 图片显示模式         | String  | aspectFill        | 可填值参考微信小程序image组件 |
| isTxv        | 是否使用腾讯视频插件 | boolean | false             | 不能同普通视频混用            |
| props        | 配置选项，见下表     | object  |                   |                               |

## props

| 参数 | 说明         | 类型   | 默认值 | 备注                                                   |
| ---- | ------------ | ------ | ------ | ------------------------------------------------------ |
| path | 页面跳转路径 | string | path   |                                                        |
| type | 数据类型     | string | type   | 可填项：video、image。可根据具体的数据类型映射成这两项 |
| url  | 资源地址     | string | url    |                                                        |

