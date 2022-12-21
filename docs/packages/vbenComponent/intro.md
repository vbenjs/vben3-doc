# vbenComponent

> 由于各种各样的组件库越来越多，并且每个人希望使用的组件库不同，所以推出VbenComponent   
> Table组件使用vxe-table  
> 不同组件库的组件参数，处理逻辑，事件可能不同，会有兼容问题，但是处理起来并不难
### 原理
在第三方组件库组件上进行封装，并做功能扩展。  
> vbenComponent组件默认全局注册   
> vbenComponent组件底层依然是第三方组件，支持原组件的参数，api等

### 使用方法
组件引入及注册
```ts
// apps/admin/init-components.ts

// 引入naive button
import {NButton} from 'naive-ui'
// 引入antdv Card
import {Card} from 'ant-design-vue'

import { initVbenComponent } from '@vben/vbencomponents'
// 将组件注册到vbenComponent
  initVbenComponent(app, {
    Button: NButton,
    Card: Card,
    ...
    })
```
VbenButton组件代码
```vue
<script lang="ts" setup name="VbenButton">
// packages/vbenComponent/src/button/src/Button.vue
import { maps } from '#/index'
//获取Button组件
const Button = maps.get('Button')
</script>
<template>
<!--  使用v-bind接受组件参数 并遍历slot-->
<!-- VbenButton组件没有做功能扩展，所以接受原组件参数-->
  <Button v-bind="$attrs">
    <template #[item]="data" v-for="item in Object.keys($slots)" :key="item">
      <slot :name="item" v-bind="data || {}"></slot> </template
  ></Button>
</template>
```
VbenButton的使用

```vue
<script lang="ts" setup >
</script>
<template>
<!--  naive的button-->
  <VbenButton type="primary">naive的button</VbenButton>
<!--  antdv的card-->
  <VbenCard title="antdv的卡片"></VbenCard>
</template>
```

