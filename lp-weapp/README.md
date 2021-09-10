<div align="center">
    <!-- <img style="width:80px" src="https://cdn.jsdelivr.net/gh/monsterno/cdn@master/img/lp-weapp2.png" /> -->
    <h1 align="center">lp Weapp</h1>
</div>

<div align="center">
    <p>一套组件化、可复用、易扩展的微信小程序</p>
</div>

# 快速上手

## 使用之前

在开始使用之前，你需要先阅读 [微信小程序自定义组件](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/) 的相关文档。

## 如何安装

### 方式一. 通过 npm 安装

通过 `npm` 安装，需要依赖小程序基础库 `2.2.1` 以上版本，同时依赖开发者工具的 `npm` 构建，[详见 npm 支持](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)。

```bash
# Using npm
npm i lp-weapp

# Using yarn
yarn add lp-weapp
```

### 方式二. 通过下载代码

通过 [gitee](https://gitee.com/MonsterLQ/lp-weapp.git) 下载 `lp-Weapp` 的代码，然后 将 `packages/lib/` 目录拷贝到自己的项目中。

- `packages/lib/` - 压缩版（ES5）
- `packages/es/` - 未压缩版（ES6，使用时需要开启 `ES6 转 ES5`，位于开发者工具右上角-详情-本地配置）

```bash
git clone https://gitee.com/MonsterLQ/lp-weapp.git
cd lp-weapp
```


## 如何使用

按照如下的方式使用组件，以 `swiper` 为例，其它组件在对应的文档页查看：

### 在 page.json 中引入组件

```json
"usingComponents": {
    "lp-swiper": "lp-wxapp/swiper/index"
}
```

### 在 page.wxml 中使用组件

```html
<lp-swiper list="{{banner}}" />
```

## License

MIT
