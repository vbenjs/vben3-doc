# 路由

Vben3 采用 Vuejs 官方推荐路由[vue-router](https://router.vuejs.org/)，功能路径位于`packages/router`下。

## 依赖安装

::: code-group

```bash [pnpm]
pnpm add vue-router@4
```
:::

## 路由模块

### `router-view`

所有的路由都由`router-view`标签进行映射，在SPA中，你可以将其放在任何地方以适应你的布局。

### 编写方式

路由功能使用不同的写法以适用不同规格的项目的需求:point_right: [简单示例](https://router.vuejs.org/guide/)

以下为Vben3路由组织方式:point_down:

```js
📁router
└── 📁src
      └── 📁helper // 路由功能
      └── 📁menus  // 菜单功能 
      └── 📁mitt   // 路由更改监听 
      └── 📁page   // 公共路由相关
      └── 📁routes // 功能路由相关
            └── 📁modules // 功能路由存放
            └── index.ts
      └── index.ts // 入口文件
      └── guard.ts // 路由导航守卫
```

::: tip  提示

所有功能路由文件都放在`modules`目录下以ts文件后缀进行解析。

:::

::: code-group

```ts [index.ts]
import { createRouter, createWebHashHistory, Router } from 'vue-router'

// 初始化路由
export let router: Router;
export function InitRouter(path: string): Router {
  router = createRouter({
    history: createWebHashHistory(path),
    routes: BaseRoutes,
    strict: true,
    scrollBehavior: () => ({left: 0, top: 0})
  })
  return router
}
```

```ts [dashboard.ts]
// routes/modules/dashboard.ts
import { LAYOUT } from '../basic'

const dashboard: RouteRecordItem = {
  path: '/dashboard',
  name: 'Dashboard',
  component: LAYOUT,
  redirect: '/dashboard/analysis',
  meta: {
    orderNo: 1,
    icon: 'ion:grid-outline',
    title: 'routes.dashboard.dashboard',
  },
  children: [
    {
      path: 'analysis',
      name: 'Analysis',
      component: () => import('@/pages/dashboard/analysis/index.vue'),
      meta: {
        title: 'routes.dashboard.analysis',
        icon: 'ion:grid-outline',
      },
    },
    {
      path: 'workbench',
      name: 'Workbench',
      component: () => import('@/pages/dashboard/workbench/index.vue'),
      meta: {
        title: 'routes.dashboard.workbench',
        icon: 'ion:grid-outline',
      },
    },
  ],
}

export default dashboard

```
:::

## 相关功能

### 路由导航

路由导航分为`编程式导航`和`声明式导航`,通常使用`✔️编程式导航`进行路由跳转。

|           声明式           |       编程式         |
|-------------------------- | ------------------- |
| `<router-link :to="...">` | `$router.push(...)` |

```ts
// 字符串路径
this.$router.push('/home')；

// 带有路径的对象
this.$router.push({ path: '/home' })

// 命名的路由，并加上参数，让路由建立url
this.$router.push({ name: 'user', params: { username: 'foo' }});

// 带查询参数，结果是 /register?plan=private
this.$router.push({ path: '/register', query: { plan: 'private' }})

// 带hash，结果是 /about#team
this.$router.push({ path: '/about', hash: '#team' })
```

::: warning
注意：如果提供了 path，params 会被忽略，上述例子中的 query 并不属于这种情况。取而代之的是下面例子的做法，你需要提供路由的 name 或手写完整的带有参数的 path。
:::

### 路由白名单功能

通过设置路由白名单，无需通过路由导航守卫拦截即可访问页面。


### 路由导航守卫功能

在导航到新路由之前，导航守卫会拦截那些正在进入的路由。从而实现导航前和导航后的一些行为实现。

### 路由权限功能

通过给路由添加权限标识符，在跳转之前进行拦截检测路由的权限，来控制用户是否有权限访问该路由。

### 路由异常处理功能

对一些异常路由进行异常处理，如404，500等。

### 动态路由Tab自动关闭功能

```ts
  {
    path: 'detail/:id',
    name: 'TabDetail',
    component: () => import('/@/views/demo/feat/tabs/TabDetail.vue'),
    meta: {
      currentActiveMenu: '/feat/tabs',
      title: t('routes.demo.feat.tabDetail'),
      hideMenu: true,
      //dynamicLevel 最大能打开的Tab标签页数
      dynamicLevel: 3,
      //realPath 动态路由实际路径(考虑到动态路由有时候可能存在N层的情况
      //例：/:id/:subId/:...), 为了减少计算开销, 
      //使用配置方式事先规定好路由的实际路径(注意: 该参数若不设置，将无法使用该功能)
      realPath: '/feat/tabs/detail',
    },
  }
```


## API说明

### 路由元信息

有时，我们想要将一些任意信息附加到路由上，如过渡，权限，状态等。这些信息可以通过接收属性对象的`meta`属性来实现，并且它可以在路由地址和导航守卫上都被访问到。以下是`meta`属性可配置的字段:point_down:
```ts

export interface RouteMeta {
  // 路由title  一般必填
  title: string;
  // 动态路由可打开Tab页数
  dynamicLevel?: number;
  // 动态路由的实际Path, 即去除路由的动态部分;
  realPath?: string;
  // 是否忽略权限，只在权限模式为Role的时候有效
  ignoreAuth?: boolean;
  // 可以访问的角色，只在权限模式为Role的时候有效
  roles?: RoleEnum[];
  // 是否忽略KeepAlive缓存
  ignoreKeepAlive?: boolean;
  // 是否固定标签
  affix?: boolean;
  // 图标，也是菜单图标
  icon?: string;
  // 内嵌iframe的地址
  frameSrc?: string;
  // 指定该路由切换的动画名
  transitionName?: string;
  // 隐藏该路由在面包屑上面的显示
  hideBreadcrumb?: boolean;
  // 如果该路由会携带参数，且需要在tab页上面显示。则需要设置为true
  carryParam?: boolean;
  // 隐藏所有子菜单
  hideChildrenInMenu?: boolean;
  // 当前激活的菜单。用于配置详情页时左侧激活的菜单路径
  currentActiveMenu?: string;
  // 当前路由不再标签页显示
  hideTab?: boolean;
  // 当前路由不再菜单显示
  hideMenu?: boolean;
  // 菜单排序，只对第一级有效
  orderNo?: number;
  // 忽略路由。用于在ROUTE_MAPPING以及BACK权限模式下，生成对应的菜单而忽略路由。2.5.3以上版本有效
  ignoreRoute?: boolean;
  // 是否在子级菜单的完整path中忽略本级path。2.5.3以上版本有效
  hidePathForChildren?: boolean;
}
```
