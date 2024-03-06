# I18n 国际化

在软件开发过程中，如果有向海外市场拓展的需求，就必须得进行国际化配置，例如多语言环境配置。

`locale` 目录是存放国际化配置的标准目录。

## 🕸️目录组织

```js
📁 locale/
  └── 📁src/
    └── 📁lang/       // 多语言
          └── 📁en/
          └── 📁zh-CN/
    └── config.ts
    └── helper.ts
    └── setup-i18n.ts
    └── store.ts
    └── use-i18n.ts
    └── use-locale.ts
```

## 🧩依赖安装

::: code-group

```bash [pnpm]
pnpm add vue-i18n@9
```

:::

## 🔥快速使用

### 1. 路由菜单使用

首先，进入 `packages/locale/src/lang/` 目录的 `en` 和 `zh-CN` 目录下，在 `routes.ts` 文件中定义中文和英文的菜单名:

::: code-group

```ts [/en/routes.ts]
export default {
  base: {
    login: 'Login',
    lock: 'LockScreen'
  }
  //...
}
```

```ts [/zh-CN/routes.ts]
export default {
  base: {
    login: '登录',
    lock: '锁屏'
  }
  //...
}
```

:::

然后，在路由文件 `router/src/routes/`下创建modules.ts进行引用。

我们定义了 `t()` 函数对路由菜单进行多语言参数转换。其它模块使用 `useI18n` hooks即可。

``` ts {11,20}
// modules.ts
// 1. 引入 t() 函数
import {t} from '@vben/locale'

// 2. 定义路由
const LOGIN_ROUTE: RouteRecordItem = {
  path: '/login',
  name: 'Login',
  component: () => import('@/pages/sys/login/login.vue'),
  meta: {
    title: t('routes.basic.login')
  }
}

const LOCK_SCREEN_ROUTE: RouteRecordItem = {
  path: '/lock',
  name: 'Lock',
  component: () => import('@/pages/sys/lock/index.vue'),
  meta: {
    title: t('routes.basic.lock')
  }
}
```

### 2. 页面模块使用

首先，在 `lang`目录下创建或定义指定的值👇
::: code-group
```ts [en/modules.ts]
export default {
  test: {
    type: 'the quick brown fox jumps over the lazy dog.'
  }
}
```

``` ts [zh-CN/modules.ts]
export default {
  test: {
    type: '一只棕色的🦊跳过一只懒惰的🐕.'
  }
}
```

:::

然后，导入 `useI18n` 进行配置👇

```js
// 某个vue页面
import {useI18n} from "@vben/locale"

const { t } = useI18n();

<template>
  <dir>
    {{ t(test.type) }}
  </dir>
</template>
```

## 📃更多功能

### 调整默认配置

要调整默认配置，只需修改模块目录 `src/setting/project.ts` 文件即可。

### 手动切换某个页面的语言

要切换某个页面的语言，使用 `useLocale` hooks.

```ts
import { useLocale } from "@vben/locale"

const { changeLocale } = useLocale();

changeLocale('en');
```

### 新增语言配置

在 `locale/src/lang` 目录下添加对应语言的目录即可。

目前项目自带语言只有 `zh_CN` 和 `en` 两种。如果需要新增，按以下步骤👇

- 在 `locale/src/lang`下创建对应语言目录。
- 在 `locale/src/config.ts`中添加类型定义。
- 在 `modules/src/settings/project.ts`中配置语言。

[待补充...]


## ✨优化体验

如果你使用 `VS Code` 进行开发，则推荐你安装 [i18n Ally](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally),