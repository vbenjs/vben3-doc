# 上手体验

## 🥢 前置环境

- [Git](https://git-scm.com)
- [NodeJs 18.x +](https://nodejs.org/en)
- [pnpm](https://pnpm.io/)
- 自己喜欢的 IDE

### 🥟 配置下载依赖镜像地址

:::code-group

```bash [淘宝镜像源]
npm config set registry https://registry.npmmirror.com
```

```bash [腾讯镜像源]
npm config set registry https://mirrors.cloud.tencent.com/npm/
```

:::

## 🍵 启动项目

```bash
git clone https://github.com/vbenjs/vben3.git
# 全局安装 pnpm
npm i -g pnpm
# 安装依赖
pnpm i
# 以开发模式启动项目
pnpm dev
```

:::danger 注意

- 该项目不支持 npm，如果强行使用，将会造成无法预知的结果；
- pnpm 安装后默认使用 npm 配置的镜像源地址，如果您需要更多配置，可以参阅：https://pnpm.io/configuring

:::

## 📁 目录结构

### scripts 脚本文件夹

```bash
📁 packages
  ┣━📁 src
    ┣━ 📁base.ts        运行脚本内容
    ┣━ 📁build.ts
    ┣━ 📁constant.ts    脚本常量
    ┣━ 📁dev.ts
    ┣━ 📁helper.ts      脚本辅助工具：命令行参数、文件解析
    ┣━ 📁preview.ts
```

### config 项目配置文件夹

```bash
|-- css-preprocess              CSS 处理器相关配置
|-- lint                        代码检查/规范、格式化相关配置
|   |-- commitlint.js           提交检查
|   |-- eslint.js               js 代码检查
|   |-- lintstaged.js   
|   |-- package.json    
|   |-- prettier.js             格式化
|   `-- stylelint.js            css 代码格式
|-- tsconfig                    TS 相关配置
`-- vite                        Vite 相关配置
    |-- build.config.ts
    |-- src
    |   |-- constants.ts
    |   |-- index.ts            入口文件
    |   |-- plugins
    |   |   |-- index.ts        插件配置入口文件，包含业务启动时打印的说明
    |   |   |-- compress.ts     压缩插件
    |   |   |-- config.ts       读取 .env 环境变量和 Vite 变量插件
    |   |   |-- html.ts         _app.config.js
    |   |   |-- https.ts        http 代理插件
    |   |   |-- imagemin.ts     图片压缩插件
    |   |   |-- mock.ts         mock 插件
    |   |   |-- monorepo.ts     monorepo 具体解析
    |   |   |-- svg-icons.ts
    |   |   |-- unocss.ts
    |   |    -- visualizer.ts   依赖分析
    |   |-- presets
    |   |   |-- antd.ts
    |   |    -- index.ts
    |   `-- utils
    |       -- index.ts         vite 环境变量包装、htpp proxy 处理工具
    `-- tsconfig.json
```

### apps 业务模块

业务模块

### packages 封装组件

多数组件都在该包下，且一般情况下，项目使用的常量位于 `packages/constants` 中。

```js
📁 packages
  ┣━ 📁components -------------- 存放自定义组件
  ┣━ 📁constants --------------- 存放全局常量枚举：菜单、颜色、路由导航、业务缓存键等
  ┣━ 📁demo -------------------- 示例demo
  ┣━ 📁directives -------------- 存放自定义指令
  ┣━ 📁hooks ------------------- 存放hooks工具类
  ┣━ 📁locale ------------------ 存放多语言本地化i18n相关
  ┣━ 📁request ----------------- 存放http请求工具类
  ┣━ 📁router ------------------ 存放router路由工具类
  ┣━ 📁stores ------------------ 存放状态管理库工具类
  ┣━ 📁style ------------------- 存放主题配置相关类 
  ┣━ 📁types ------------------- 存放类型定义配置文件类 
  ┣━ 📁utils ------------------- 存放工具类相关
  ┣━ 📁vbenComponents ---------- 存放封装好的第三方组件
  ┣━ 📁grid-layouts ------------ 存放布局相关工具类
```
