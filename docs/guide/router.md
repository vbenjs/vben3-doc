# 路由
路由配置存放于 src/router/routes 下面。   
src/router/routes/modules用于存放路由模块，路由模块会自动注册。

## 路由模块
:::info 注意
在 src/router/routes/modules 内的 .ts 文件会被视为一个路由模块。
:::

```ts
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

## meta定义
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
## 动态路由Tab自动关闭功能
```Ts
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
