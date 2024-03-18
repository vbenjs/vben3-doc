# 介绍

Vue hooks 受到 React hooks启发，可以让开发人员在不编写class的情况下使用状态和其他功能。

hooks 主要对模式的复用提供了一种更明确的思路：避免重写组件本身，并允许有状态逻辑的不同部分能无缝地进行协同工作。


## ✨ vue-hooks解决的问题

- 实现了mixins的功能,并解决了mixins的两个问题
    - 允许相互传递状态
    - 明确指出了逻辑来自哪里。使用hooks，函数的返回值会记录消费的值

- vue-hooks是简化组件定义、复用状态逻辑的一种最新尝试，并且结合Vue实例的特点提供了适用的Hooks

## 💬 Vben3 中的hooks

在Vben3中，hooks的定义规范如下：

- modules hooks 名称使用小驼峰命名
- modules hooks 名称以 `use`为开头

## 🕸️ hooks 目录结构

```js
📁hooks
┣━━📁src
   └── 📁config
   └── 📁event
   └── 📁setting
   └── 📁web
   └── 📄index.ts
   └── 📄useContext.ts
   └── 📄usePage.ts
   └── 📄usePromise.ts
   └── 📄useRefs.ts
   └── 📄useTitle.ts
┣━━ 📄index.ts
```
