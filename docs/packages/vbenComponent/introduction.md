---
title: 介绍
author: ya2glu
time: Feb 27, 2024
---

# 介绍

Vben3使用 `透传Attributes` 方式对第三方组件进行集成封装，开发者可以按需引入注册。

自定义业务组件存放在 `packages/components/` 目录下。

## 组件注册

- 公共组件

    公共组件在项目 `apps` 的模块下创建 `init-components.ts` 文件，按需导入并注册所需的组件。

::: code-group

```ts [init-components.ts]
// 按需引入
import {NButton} from 'naive-ui'
import {initVbenComponent, setNotice, setMessage, setDialog} from "@vben/vbencomponents"

// 组件注册
export async function registerComponents(app) {
  initVbenComponent(app, {
    AButton: NButton
  })
  setMessage(useMessage);
  setNotice(useNotification);
  setDialog(useDialog);
}
```
:::

- 自定义组件

    自定义组件使用ES6模块的import\export语法直接导入导出使用即可。



