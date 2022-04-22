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

