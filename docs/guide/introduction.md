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

## 知识准备

本项目需要一定前端基础知识，请确保掌握 Vue 的基础知识，以便能处理一些常见的问题。建议在开发前了解/学习以下内容，这对项目理解和开发非常有帮助:

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

如果这些插件对你有帮助，可以给一个 star 支持下！

- [vite-plugin-mock](https://github.com/vbenjs/vite-plugin-mock) - 用于本地及开发环境数据 `mock`
- [vite-plugin-html](https://github.com/vbenjs/vite-plugin-html) - 用于 `html` 模版转换，可以在`html`文件内进行书写模版语法
- [vite-plugin-style-import](https://github.com/vbenjs/vite-plugin-style-import) - 用于组件库样式按需引入
- [vite-plugin-imagemin](https://github.com/vbenjs/vite-plugin-imagemin) - 用于打包压缩图片资源
- [vite-plugin-theme](https://github.com/vbenjs/vite-plugin-theme) - 用于在线切换主题色/黑暗主题适配等主题相关配置
- [vite-plugin-compression](https://github.com/vbenjs/vite-plugin-compression) - 用于打包输出`.gz`|`.br`文件
- [vite-plugin-svg-icons](https://github.com/vbenjs/vite-plugin-svg-icons) - 快速生成 `svg sprite`

## 贡献文档

- 中文文档地址为 [vben3](https://github.com/vbenjs/vben3-doc)，采用 Vitepress 开发。如发现文档有误，欢迎提 pr 帮助我们改进。
- 英文文档暂时没有时间来写，欢迎有时间的小伙伴来帮忙补充英文文档！👉 [加入我们](/other/follow)。

如需本地运行文档，请拉取文档仓库源代码到本地并启动。

```bash
# vben3 文档源码
git clone https://github.com/vbenjs/vben3-doc

# 安装依赖
pnpm i

# 运行文档
pnpm docs:dev
```
