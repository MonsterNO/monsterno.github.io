# 快速开始

lp-weapp 是一套组件化、可复用、易扩展的微信小程序 UI 组件库。

## 安装

```bash
# 通过 npm 安装
npm i lp-weapp

# 通过 yarn 安装
yarn add lp-weapp
```

## 修改 app.json

将 app.json 中的 "style": "v2" 去除，小程序的新版基础组件强行加上了许多样式，难以覆盖，不关闭将造成部分组件样式混乱。

## 修改 project.config.json

开发者工具创建的项目，miniprogramRoot 默认为 miniprogram，package.json 在其外部，npm 构建无法正常工作。
需要手动在 project.config.json 内添加如下配置，使开发者工具可以正确索引到 npm 依赖的位置。

```json
{
  ...
  "setting": {
    ...
    "packNpmManually": true,
    "packNpmRelationList": [
      {
        "packageJsonPath": "./package.json",
        "miniprogramNpmDistDir": "./miniprogram/"
      }
    ]
  }
}
```

> 注意： 由于目前新版开发者工具创建的小程序目录文件结构问题，npm构建的文件目录为miniprogram_npm，并且开发工具会默认在当前目录下创建miniprogram_npm的文件名，所以新版本的miniprogramNpmDistDir配置为'./'即可

## 构建 npm 包

打开微信开发者工具，点击 工具 -> 构建 npm，并勾选 使用 npm 模块 选项，构建完成后，即可引入组件。
