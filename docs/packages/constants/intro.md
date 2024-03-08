# 全局变量

在软件开发中，全局变量和枚举可以方便的管理应用生命周期内的上下文。开发者可以在开发功能时评估是否需要使用全局变量进行变量的管理和使用。

`constants` 目录是存放全局变量的标准目录。

## 🕸️目录结构

```ts
📁 constants
┣━━📁src
  └── 📄appEnum.ts          // 应用级枚举
  └── 📄breakpoint.ts       // 断点
  └── 📄cacheEnum.ts        // 缓存枚举
  └── 📄designSetting.ts    // 主题枚举
  └── 📄menuEnum.ts         // 菜单枚举
  └── 📄multipleTabEnum.ts  // tabs菜单枚举
  └── 📄router.ts           // 路由
  └── 📄sidebar.ts          // 侧边栏
  └── 📄index.ts
```

## 📃常量列表

Vben3定义了如下常量：

### 应用常量

| 常量名                       | 值                                                                        | 说明                |
| ---------------------------- | ------------------------------------------------------------------------- | ------------------- |
| ContentLayoutEnum            | `FULL`、`FIXED`                                                           | 调整内容宽度        |
| ThemeEnum                    | `DARK`、`LIGHT`                                                           | 主题颜色            |
| NavBarModeEnum               | `SIDEBAR`、`MIX_SIDEBAR`、`MIX`、`TOP_MENU`                               | 导航栏布局样式      |
| SettingButtonPositionEnum    | `AUTO`、`HEADER`、`FIXED`                                                 | 设置按钮位置        |
| SessionTimeoutProcessingEnum | `ROUTE_JUMP`、`PAGE_COVERAGE`                                             | SESSION超时处理方式 |
| PermissionModeEnum           | `ROLE`、`BACK`、`ROUTE_MAPPING`                                           | 权限校验模式        |
| RouterTransitionEnum         | `ZOOM_FADE`、`ZOOM_OUT`、`FADE_SIDE`、`FADE`、`FADE_BOTTOM`、`FADE_SCALE` | 页面切换动画类型    |
| RoleEnum                     | `SUPER`、`TEST`                                                           | 角色类型            |
| ComponentSizeEnum            | `DEFAULT`、`SMALL`、`LARGE`                                               | 组件大小类型        |
| ErrorTypeEnum                | `VUE`、`SCRIPT`、`RESOURCE`、`AJAX`、`PROMISE`                            | 错误类型            |

### 断点

| 常量名          | 值                                         | 说明           |
| --------------- | ------------------------------------------ | -------------- |
| ScreenSizeEnum  | `XS`、`SM`、`MD`、`LG`、`XL`、`XXL`        | 屏幕断点枚举   |
| ScreenValueEnum | `480`、`576`、`768`、`992`、`1200`、`1600` | 屏幕断点枚举值 |

### 缓存

| 常量名              | 值                       | 说明                           |
| ------------------- | ------------------------ | ------------------------------ |
| TOKEN_KEY           | `TOKEN__`                | token key                      |
| LOCALE_KEY          | `LOCALE__`               | locale key                     |
| USER_INFO_KEY       | `USER__INFO__`           | user info key                  |
| ROLES_KEY           | `ROLES__KEY__`           | roles key                      |
| PROJ_CFG_KEY        | `PROJ__CFG__KEY__`       | project config cache key       |
| LOCK_INFO_KEY       | `LOCK__INFO__KEY__`      | lock screen info cache key     |
| MULTIPLE_TABS_KEY   | `MULTIPLE_TABS__KEY__`   | multiple tabs key              |
| APP_DARK_MODE_KEY_  | `__APP__DARK__MODE__`    | app dark mode status cache key |
| APP_LOCAL_CACHE_KEY | `COMMON__LOCAL__KEY__`   | app local cache key            |
| APP_SESSION__KEY__  | `COMMON__SESSION__KEY__` | app session cache key          |

### 颜色主题

| 常量名                | 说明         |
| --------------------- | ------------ |
| APP_PRESET_COLOR_LIST | 预编译主题色 |
| HandlerSettingEnum    | 配置枚举     |
| ThemeChangeEnum       | 主题配置     |

### 菜单枚举

| 常量名                | 值                                                   | 说明                 |
| --------------------- | ---------------------------------------------------- | -------------------- |
| TriggerEnum           | `NONE`、`FOOTER`、`CENTER`、`HEADER`                 | 折叠触发器的位置     |
| Mode                  | `vertical`、`vertical-right`、`horizontal`、`inline` | 模式                 |
| MenuModeEnum          | `VERTICAL`、`HORIZONTAL`、`VERTICAL_RIGHT`、`INLINE` | 菜单类型             |
| MenuSplitTypeEnum     | `NONE`、`TOP`、`LEFT`                                | 菜单分割类型         |
| TopMenuAlignEnum      | `CENTER`、`START`、`END`                             | 顶部菜单对齐类型     |
| MixSidebarTriggerEnum | `HOVER`、`CLICK`                                     | 混合侧边栏的触发类型 |

### 多标签

| 常量名         | 值                                                                                                         | 说明           |
| -------------- | ---------------------------------------------------------------------------------------------------------- | -------------- |
| TabContentEnum | `TAB_TYPE`、`EXTRA_TYPE`                                                                                   | 多标签内容类型 |
| TabActionEnum  | `REFRESH_PAGE`、`CLOSE_CURRENT`、`CLOSE_LEFT`、`CLOSE_RIGHT`、`CLOSE_OTHER`、`CLOSE_ALL`、`SCALE`、`CLOSE` | 多标签操作类型 |

### 路由

| 常量名              | 值                                                                     | 说明                   |
| ------------------- | ---------------------------------------------------------------------- | ---------------------- |
| REDIRECT_NAME       | Redirect                                                               | 定义路由重定向名称     |
| PAGE_NOT_FOUND_NAME | `PageNotFound`                                                         | 定义路由无法找到的名称 |
| BASIC_LOGIN_PATH    | `/login`                                                               | 定义基础路由入口       |
| BASIC_HOME_PATH     | `/dashboard`                                                           | 定义首页地址           |
| BASIC_ERROR_PATH    | `/exception`                                                           | 错误页面地址           |
| BASIC_LOCK_PATH     | `/lock`                                                                | 定义锁屏页面地址       |
| PageEnum            | `BASE_LOGIN`、`BASE_HOME`、`ERROR_PAGE`、`ERROR_LOG_PAGE`、`BASE_LOCK` | 页面枚举               |

### 侧边栏

| 常量名                       | 值   | 说明               |
| ---------------------------- | ---- | ------------------ |
| SIDE_BAR_MINI_WIDTH          | `48` | 侧边栏最小宽度     |
| SIDE_BAR_SHOw_TIT_MINI_WIDTH | `80` | 侧边栏标题最小宽度 |