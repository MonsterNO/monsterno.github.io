## 用户管理

微信用户表-wx_user

| 字段          | 类型      | 注释        |
| ----------- | ------- | --------- |
| id          | int     | id        |
| openid      | varchar | 微信openid  |
| unionid     | varchar | 微信unionid |
| nickName    | varchar | 昵称        |
| avatarUrl   | varchar | 头像        |
| city        | varchar | 城市        |
| province    | varchar | 省份        |
| country     | varchar | 国家        |
| gender      | int     | 性别        |
| create_time | date    | 创建时间      |
| login_time  | date    | 最后登录时间    |
| login_num   | int     | 登录频率      |

用户信息详细表wx_userinfo

| 字段          | 类型      | 注释     |
| ----------- | ------- | ------ |
| id          | varchar | openid |
| name        | varchar | 姓名     |
| sex         | int     | 性别     |
| birthday    | varchar | 生日     |
| phone       | int     | 手机号    |
| email       | varchar | 邮箱     |
| address     | varchar | 地区     |
| create_time | date    | 创建时间   |
| introduce   | varchar | 个人简介   |

后台信息表sys_user

| 字段          | 类型      | 注释          |
| ----------- | ------- | ----------- |
| id          | varchar | id，通过uuid生成 |
| nickname    | varchar | 昵称          |
| avatar      | varchar | 头像          |
| account     | varchar | 账户          |
| password    | varchar | 密码，加密       |
| create_time | date    | 创建时间        |
| login_time  | date    | 最后登录时间      |

## 字典管理

dict

| 字段          | 类型      | 注释         |
| ----------- | ------- | ---------- |
| id          | int     | id         |
| type        | varchar | 类型编组       |
| name        | varchar | 名称         |
| value       | varchar | 值          |
| sort        | int     | 排序，默认99999 |
| enable      | int     | 是否启用       |
| create_time | date    | 时间         |
| remark      | varchar | 备注         |

## 文章管理

article

| 字段          | 类型   | 注释            |
| ----------- | ---- | ------------- |
| id          | int  | id            |
| title       | 字符串  | 标题            |
| detail      | 字符串  | 副标题           |
| cover       | 字符串  | 封面            |
| type        | 字符串  | 类型：1-公众号，2-站内 |
| category    | 字符串  | 类别            |
| url         | 字符串  | 公众号链接         |
| content     | 字符串  | 站内文章文本        |
| tag         | 字符串  | 标签            |
| hot         | int  | 是否轮播图         |
| sort        | int  | 排序，默认99999    |
| read        | int  | 阅读数           |
| enable      | int  | 是否启用          |
| create_time | date | 创建时间          |

## 每日一文

one

| 字段           | 类型      | 注释   |
| ------------ | ------- | ---- |
| id           | int     | id   |
| title        | varchar | 标题   |
| content      | varchar | 内容   |
| cover        | varchar | 封面   |
| text_authors | varchar | 作者   |
| cover_author | varchar | 封面作者 |
| create_time  | varchar | 时间   |
| enable       | int     | 启用   |

notice

| 字段     | 类型      | 注释   |
| ------ | ------- | ---- |
| id     | int     | id   |
| text   | varchar | 公告   |
| enable | int     | 启用   |

## 图库

wallpaper

| 字段       | 类型      | 注释   |
| -------- | ------- | ---- |
| id       | int     | id   |
| type     | varchar | 类型   |
| url      | varchar | 展示图片 |
| down     | varchar | 下载图片 |
| read     | int     | 阅读数  |
| down_num | int     | 下载数  |
| enable   | int     | 启用   |

## 题库

question

| 字段          | 类型      | 注释      |
| ----------- | ------- | ------- |
| id          | int     | id      |
| title       | varchar | 标题      |
| detail      | varchar | 详情      |
| answer      | varchar | 答案      |
| options     | varchar | 选项      |
| reference   | varchar | 解析      |
| type        | varchar | 题型      |
| category    | varchar | 类别      |
| tag         | varchar | 标签      |
| render_type | varchar | 渲染类型    |
| sort        | int     | 排序99999 |
| create_time | date    | 时间      |
| read        | int     | 阅读数     |
| remark      | varchar | 备注      |
| enable      | int     | 启用      |

question_collect

| 字段          | 类型      | 注释   |
| ----------- | ------- | ---- |
| openid      | varchar | 用户id |
| questionid  | varchar | 题目id |
| create_time | date    | 时间   |

question_paper

| 字段          | 类型      | 注释   |
| ----------- | ------- | ---- |
| id          | int     | id   |
| title       | varchar | 试卷标题 |
| question    | varchar | 多个题目 |
| enable      | int     | 启用   |
| create_time | date    | 时间   |

