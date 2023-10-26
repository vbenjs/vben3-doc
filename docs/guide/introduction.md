# vben admin 后台管理系统

## 简介

[Vben3](https://github.com/vbenjs/vben3) 是一个基于 [Vue3.0](https://github.com/vuejs/core)、[Vite](https://github.com/vitejs/vite)、 [Ant-Design-Vue](https://www.antdv.com/components/overview-cn)、[TypeScript](https://www.typescriptlang.org/) 的后台解决方案，采用 [Monorepo](https://monorepo.tools/) 管理源代码仓库，目标是为开发中大型项目提供开箱即用的解决方案。包括二次封装组件、utils、hooks、动态菜单、权限校验、按钮级别权限控制等功能。项目会使用前端较新的技术栈，可以作为项目的启动模版，以帮助你快速搭建企业级中后台产品原型。也可以作为一个示例，用于学习 `vue3`、`vite`、`ts` 等主流技术。该项目会持续跟进最新技术，并将其应用在项目中。

## 环境准备

在本文档开始之前，默认您的电脑已经安装了以下工具：

- [Git](https://git-scm.com)
- [NodeJs 16.x +](https://nodejs.org/en)
- 自己喜欢的 IDE

:::warning 注意
NodeJs 推荐 16.x 版本以上，如果您的本地需要安装不同版本的 NodeJs，请考虑使用 nvm 来管理。
:::

## 文档

- 中文文档地址为 [vben3](https://github.com/vbenjs/vben3-doc)，采用 Vitepress 开发。如发现文档有误，欢迎提 pr 帮助我们改进。
- 英文文档暂时没有时间来写，欢迎有时间的同学来帮忙写英文文档。

### 本地运行文档

如需本地运行文档，请拉取文档仓库源代码到本地。

```bash
# vben3 文档源码
git clone https://github.com/vbenjs/vben3-doc

# 安装依赖
pnpm i

# 运行文档
pnpm docs:dev
```

## 需要掌握的基础知识

本项目需要一定前端基础知识，请确保掌握 Vue 的基础知识，以便能处理一些常见的问题。建议在开发前先学一下以下内容，提前了解和学习这些知识，会对项目理解非常有帮助:

- [Vue3 文档](https://vuejs.org/)
- [Vue-RFCS](https://github.com/vuejs/rfcs)
- [Vue2 迁移到 3](https://v3-migration.vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vue-router](https://router.vuejs.org/)
- [Ant-Design-Vue](https://www.antdv.com/components/overview-cn)
- [Es6](https://es6.ruanyifeng.com/)
- [Vitejs](https://vitejs.dev/)
- [WindiCss](https://windicss.netlify.app/)

## vite 插件推荐

如果这些插件对你有帮助，可以给一个 star 支持下

- [vite-plugin-mock](https://github.com/vbenjs/vite-plugin-mock) - 用于本地及开发环境数据 `mock`
- [vite-plugin-html](https://github.com/vbenjs/vite-plugin-html) - 用于 `html` 模版转换，可以在`html`文件内进行书写模版语法
- [vite-plugin-style-import](https://github.com/vbenjs/vite-plugin-style-import) - 用于组件库样式按需引入
- [vite-plugin-imagemin](https://github.com/vbenjs/vite-plugin-imagemin) - 用于打包压缩图片资源
- [vite-plugin-theme](https://github.com/vbenjs/vite-plugin-theme) - 用于在线切换主题色/黑暗主题适配等主题相关配置
- [vite-plugin-compression](https://github.com/vbenjs/vite-plugin-compression) - 用于打包输出`.gz`|`.br`文件
- [vite-plugin-svg-icons](https://github.com/vbenjs/vite-plugin-svg-icons) - 快速生成 `svg sprite`

## 浏览器支持

**本地开发** 推荐使用最新版的 `Chrome` 浏览器，**不支持**`Chrome 80`以下版本。

**生产环境** 支持现代浏览器，不支持 IE。

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png" alt="IE" width="24px" height="24px"  />](http://godban.github.io/browsers-support-badges/)IE | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Safari |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                                                                not support                                                                                                                |                                                                                          last 2 versions                                                                                          |                                                                                               last 2 versions                                                                                                |                                                                                             last 2 versions                                                                                              |                                                                                             last 2 versions                                                                                              |

## 如何加入我们

- [Vben3](https://github.com/vbenjs/vben3) 还在持续更新中，本项目欢迎您的参与，共同维护，逐步完善，将项目做得更强。同时整个项目本着一切免费的原则，原则上不会收取任何费用及版权，可以放心使用。
- 如果你想加入我们，可以多提供一些好的建议或者提交 pr，我们会根据你的活跃度邀请你加入。
+ 项目仓库地址：[https://github.com/vbenjs/vben3](https://github.com/vbenjs/vben3)
+ 文档仓库地址：[https://github.com/vbenjs/vben3-doc](https://github.com/vbenjs/vben3-doc)
+ KOOK：[https://kook.top/6ZPFKi](https://kook.top/6ZPFKi)
+ Vben3 QQ群（新）：4286109
