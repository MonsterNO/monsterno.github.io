## 快速开始

### 接口地址

> https://api.lingping.icu/book_hole

### 状态码说明

| 状态码  | 说明   |
| ---- | ---- |
| 200  | 成功   |
| 400  | 错误   |
| 401  | 未登录  |
| 500  | 服务错误 |

## 用户管理

### 微信登录

**请求地址：** `/wx/login`

**请求方式：** `POST`

**请求参数：** 

| 字段   | 类型     | 必须   | 说明     | 备注      |
| ---- | ------ | ---- | ------ | ------- |
| code | string | 是    | 微信code |         |
| user | string | 是    | 微信用户信息 | json字符串 |

**返回结果：**

```json
{
  code:200,
  data:openid,
  msg:'登录成功'
}
```

### 获取个人微信信息

**请求地址：** `/wx/userinfo`

**请求方式：** `GET`

**请求参数：** 无

**请求头：** 

| 字段    | 说明      | 备注              |
| ----- | ------- | --------------- |
| token | token信息 | token携带openid认证 |

**返回结果：**

```json
{
  code:200,
  data:{
    ...
  },
  msg:'操作成功'
}
```

### 修改微信个人信息

**请求地址：** `/wx/edituserinfo`

**请求方式：** `POST`

**请求头：** 

| 字段    | 说明      | 备注              |
| ----- | ------- | --------------- |
| token | token信息 | token携带openid认证 |

**请求参数：** 

| 字段        | 类型     | 必须   | 说明   | 备注   |
| --------- | ------ | ---- | ---- | ---- |
| name      | string | 是    | 姓名   |      |
| sex       | number | 是    | 性别   | 1男2女 |
| birthday  | string | 是    | 生日   |      |
| phone     | number | 是    | 手机号  |      |
| email     | string | 是    | 邮箱   |      |
| address   | string | 是    | 地址   |      |
| introduce | string | 是    | 个人简介 |      |

**返回结果：**

```json
{
  code:200,
  msg:'操作成功'
}
```

### 后台管理注册

**请求地址：**`/sys/register`

**请求方式：** `POST`

**请求参数：**

| 字段       | 类型     | 必须   | 说明   | 备注   |
| -------- | ------ | ---- | ---- | ---- |
| nickname | string | 是    | 昵称   |      |
| account  | string | 是    | 用户名  |      |
| password | string | 是    | 密码   |      |

**返回结果：**

```json
{
  code:200,
  msg:'操作成功'
}
```

### 后台登录

**请求地址：**`/sys/login`

**请求方式：**`POST`

**请求参数：**

| 字段       | 类型     | 必须   | 说明   | 备注   |
| -------- | ------ | ---- | ---- | ---- |
| account  | string | 是    | 账号   |      |
| password | string | 是    | 密码   |      |

**返回结果：**

```json
{
  code:200,
  data:token,
  msg:'登录成功'
}
```

### 获取后台用户信息

**请求地址：** `/sys/user`

**请求方式：** `GET`

**请求参数：** 无

**请求头：**

| 字段            | 说明      | 备注   |
| ------------- | ------- | ---- |
| Authorization | token信息 |      |

**返回结果：**

```json
{
    "code": 200,
    "data": {
        "id": "xxx",
        "nickname": "xxx",
        "avatar": "xxx"
    },
    "msg": "操作成功"
}
```

### 微信用户列表

**请求地址：** `/sys/wxList`

**请求方式：** `POST`

**请求头：**

| 字段            | 说明      | 备注   |
| ------------- | ------- | ---- |
| Authorization | token信息 |      |

**请求参数：**

| 字段       | 类型     | 必须   | 说明   | 备注   |
| -------- | ------ | ---- | ---- | ---- |
| name     | string | 否    | 用户昵称 |      |
| pagesize | number | 否    | 条数   |      |
| pagenum  | number | 否    | 页码   |      |

**返回结果：**

```json
{
  code:200,
  data:[],
  total:条数,
  msg:'操作成功'
}
```

### pc授权登录

**请求地址：** `/pc/login`

**请求方式：** `GET`

**请求参数：**无

**请求头：**无

**返回结果：**

```json
{
  code:200,
  data:{
    img:'base64图片编码',
    code:'授权码'
  },
  msg:'操作成功'
}
```

### 检查登录状态

**请求地址：** `/pc/checkLogin`

**请求方式：** `POST`

**请求参数：**

| 字段   | 类型     | 必须   | 说明   | 备注   |
| ---- | ------ | ---- | ---- | ---- |
| code | string | 是    | 授权码  |      |

**返回结果：**

```json
{
  code:200,
  data:'token',
  msg:'操作成功'
}
```

## 字典管理

### 微信使用字典

**请求地址：** `/wx/dict`

**请求方式：** `POST`

**请求参数：**

| 字典   | 类型     | 必须   | 说明   | 备注   |
| ---- | ------ | ---- | ---- | ---- |
| type | string | 是    | 类型   |      |

**返回结果：**

```json
{
  code:200,
  data:[],
  msg:'操作成功'
}
```

### 字典列表

**请求地址：** `/sys/dict`

**请求方式：** `POST`

**请求参数：** 

| 字段       | 类型     | 必须   | 说明   | 备注   |
| -------- | ------ | ---- | ---- | ---- |
| word     | string | 否    | 字典名称 |      |
| type     | string | 否    | 字典类型 |      |
| enable   | number | 否    | 是否全部 | 0、1  |
| pagesize | number | 否    | 条数   |      |
| pagenum  | number | 否    | 页码   |      |

**返回结果：**

```json
{
  code:200,
  data:[],
  total:'条数'
  msg:'操作成功'
}
```

### 新增字典

**请求地址：** `/sys/addDict`

**请求方式：** `POST`

**请求头：**

| 字段            | 说明    | 备注   |
| ------------- | ----- | ---- |
| Authorization | token |      |

**请求参数：**

| 字段     | 类型     | 必须   | 说明   | 备注            |
| ------ | ------ | ---- | ---- | ------------- |
| id     | number | 否    | 字典id | 有id是修改，无id是新增 |
| type   | string | 是    | 字典类型 |               |
| name   | string | 是    | 字典名称 |               |
| value  | string | 是    | 字典值  |               |
| sort   | number | 否    | 排序   |               |
| enable | number | 否    | 启用   |               |
| remark | string | 否    | 备注   |               |

**返回结果：**

```json
{
  code:200,
  msg:'操作成功'
}
```

## 公共接口

### 数据删除

**请求地址：** `/delete`

**请求方式：** `POST`

**请求头：**

| 字段            | 说明    | 备注   |
| ------------- | ----- | ---- |
| Authorization | token |      |

**请求参数：**

| 字段   | 类型     | 必须   | 说明   | 备注   |
| ---- | ------ | ---- | ---- | ---- |
| id   | number | 是    | id   |      |
| type | string | 是    | 表名   |      |

**返回结果：**

```json
{
  code:200,
  msg:'操作成功'
}
```

### 计数

**请求地址：** `/count`

**请求方式：**`POST`

**请求参数：**

| 字段    | 类型     | 必须   | 说明   | 备注              |
| ----- | ------ | ---- | ---- | --------------- |
| id    | number | 是    | id   |                 |
| type  | number | 是    | 表名   | 0文章、1题库、2试卷、3壁纸 |
| field | string | 是    | 字段名  |                 |

**返回结果：**

```json
{
  code:200,
  msg:'操作成功'
}
```

## 每日一文-公告

### 获取公告

**请求地址：** `/wx/notice`

**请求方式：** `GET`

**请求头：** 无

**请求参数：**无

**返回结果：**

```json
{
  code:200,
  data:{
    id:'xxx',
    text:"xxxx"
  },
  msg:"操作成功"
}
```

### 新增公告

**请求地址：** `/sys/addNotice`

**请求方式：** `POST`

**请求头：**

| 字段            | 说明    | 备注   |
| ------------- | ----- | ---- |
| Authorization | token |      |

**请求参数：**

| 字段   | 类型     | 必须   | 说明   | 备注            |
| ---- | ------ | ---- | ---- | ------------- |
| id   | number | 是    | id   | 有id是修改，无id是新增 |
| text | string | 是    | 内容   |               |

**返回结果：**

```json
{
  code:200,
  msg:'操作成功'
}
```

### 公告列表

**请求地址：** `/sys/notice`

**请求方式：** `POST`

**请求头：**

| 字段            | 说明    | 备注   |
| ------------- | ----- | ---- |
| Authorization | token |      |

**请求参数：**

| 字段       | 类型     | 必须   | 说明   | 备注   |
| -------- | ------ | ---- | ---- | ---- |
| pagesize | number | 否    | 条数   |      |
| text     | string | 否    | 内容   |      |
| pagenum  | number | 否    | 页码   |      |

**返回结果：**

```json
{
  code:200,
  data:[],
  total:'条数',
  msg:'操作成功'
}
```

### one列表

**请求地址：** `/sys/one`

**请求方式：** `POST`

**请求头：**

| 字段            | 说明    | 备注   |
| ------------- | ----- | ---- |
| Authorization | token |      |

**请求参数：**

| 字段       | 类型     | 必须   | 说明   | 备注   |
| -------- | ------ | ---- | ---- | ---- |
| pagesize | number | 否    | 条数   |      |
| word     | string | 否    | 搜索   |      |
| pagenum  | number | 否    | 页码   |      |
| enable   | number | 否    | 启用   |      |

**返回结果：**

```json
{
  code:200,
  data:[],
  total:'条数',
  msg:'操作成功'
}
```

### 新增one

**请求地址：** `/sys/one`

**请求方式：** `POST`

**请求头：**

| 字段            | 说明    | 备注   |
| ------------- | ----- | ---- |
| Authorization | token |      |

**请求参数：**

| 字段           | 类型     | 必须   | 说明   | 备注   |
| ------------ | ------ | ---- | ---- | ---- |
| id           | number | 否    | id   | 空：新增 |
| title        | string | 是    | 标题   |      |
| content      | string | 是    | 内容   |      |
| cover        | string | 是    | 封面   |      |
| text_authors | string | 是    | 作者   |      |
| cover_author | string | 是    | 封面作者 |      |
| create_time  | string | 是    | 时间   |      |
| enable       | number | 否    | 启用   |      |

**返回结果：**

```json
{
  code:200,
  msg:'操作成功'
}
```

## 菜单管理

### 微信菜单

**请求地址：** `/wx/menu`

**请求方式：** `POST`

**请求头：** 无

**请求参数：**无

**返回结果：**

```json
{
  code:200,
  data:[
    {
      id,
      name,
      path,
      cover
    }
  ],
  msg:'操作成功'
}
```

### 菜单列表

**请求地址：** `/sys/menu`

**请求方式：** `POST`

**请求头：**

| 字段            | 说明    | 备注   |
| ------------- | ----- | ---- |
| Authorization | token |      |

**请求参数：**

| 字段     | 类型     | 必须   | 说明   | 备注   |
| ------ | ------ | ---- | ---- | ---- |
| word   | string | 否    | 菜单名  |      |
| enable | number | 否    | 启用   |      |

**返回结果：**

```json
{
  code:200,
  data:[
    {
      id,
      name,
      path,
      cover,
      sort,
      enable,
      del_flag
    }
  ],
  msg:'操作成功'
}
```

### 新增菜单

**请求地址：** `/sys/addMenu`

**请求方式：** `POST`

**请求头：**

| 字段            | 说明    | 备注   |
| ------------- | ----- | ---- |
| Authorization | token |      |

**请求参数：**

| 字段     | 类型     | 必须   | 说明   | 备注           |
| ------ | ------ | ---- | ---- | ------------ |
| id     | number | 否    | id   | id为空新增，不为空修改 |
| name   | string | 是    | 菜单名称 |              |
| path   | string | 是    | 菜单路由 |              |
| cover  | string | 是    | 菜单封面 |              |
| sort   | number | 否    | 排序   |              |
| enable | number | 否    | 启用   |              |

**返回结果：**

```json
{
  code:200,
  msg:'操作成功'
}
```

## 图库

### 微信壁纸

**请求地址：** `/wx/wallpaper`

**请求方式：** `POST`

**请求头：**

| 字段    | 说明    | 备注   |
| ----- | ----- | ---- |
| token | token |      |

**请求参数：**

| 字段       | 类型     | 必须   | 说明   | 备注   |
| -------- | ------ | ---- | ---- | ---- |
| type     | string | 是    | 类型   |      |
| pagesize | number | 否    | 条数   |      |
| pagenum  | number | 否    | 页码   |      |

**返回结果：**

```json
{
  code:200,
  data:[],
  total:'条数',
  msg:'操作成功'
}
```

### 新增壁纸

**请求地址：** `/sys/addWallpaper`

**请求方式：** `POST`

**请求头：**

| 字段            | 说明    | 备注   |
| ------------- | ----- | ---- |
| Authorization | token |      |

**请求参数：**

| 字段       | 类型     | 必须   | 说明   | 备注   |
| -------- | ------ | ---- | ---- | ---- |
| id       | number | 否    | id   | 空：新增 |
| type     | string | 是    | 类型   |      |
| url      | string | 是    | 预览地址 |      |
| down     | string | 是    | 下载地址 |      |
| read     | string | 是    | 阅读数  |      |
| down_num | string | 是    | 下载数  |      |
| enable   | number | 否    | 启用   |      |

**返回结果：**

```json
{
  code:200,
  msg:'操作成功'
}
```

