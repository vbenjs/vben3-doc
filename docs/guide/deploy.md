# 构建 & 部署

:::tip 前置环境
- [Git](https://git-scm.com)
- [NodeJs 16.x +](https://nodejs.org/en)
- [pnpm](https://pnpm.io/) 包管理器
:::

## 环境准备

[pnpm](https://pnpm.io/) 内置了对 monorepo（又名多包存储库、多项目存储库或整体存储库）的支持。您可以创建一个工作区，以将多个项目合并到单个存储库中。工作区的根目录中必须有一个 `pnpm-workspace.yaml` 文件。工作区的根 `.npmrc` 中也可能有一个。

:::tip
本文对 pnpm 的介绍不如官网文档详细，您可以去 pnpm 的官网获取更加详细的介绍：https://pnpm.io。
:::

### 安装 pnpm

如果已经安装了 NodeJs，那么大概率 npm 包管理器也会随之安装，由于其使用较为方便，我们使用该工具安装 pnpm。

```bash
# npm 设置淘宝镜像源（推荐）
npm config set registry https://registry.npmmirror.com
# 全局安装 pnpm
npm i -g pnpm
```

如果您已经配置过其它镜像源，只想本次安装的时候使用淘宝的镜像源来全局安装 pnpm，则可以使用以下命令，该命令不会改变您默认的 npm 配置：

```bash
npm install --registry=http://registry.npmmirror.com -g pnpm
```

:::danger 注意
- 该项目不支持 npm，如果强行使用，将会造成无法预知的结果；
- pnpm 安装后默认使用 npm 配置的镜像源地址，如果您需要更多配置，可以参阅：https://pnpm.io/configuring
:::

## 部署

```bash
# clone 仓库
git clone https://github.com/vbenjs/vben3
# 安装依赖
pnpm i
# 以开发模式启动项目
pnpm dev
```

:::tip 提示
- 如果本项目是第一次在本地环境运行，启动项目的时候可能会弹出安装证书或者是否信任证书的弹框，选择安装或者是即可；
- 如果本地启动时没有弹出弹框，则可以修改 `apps/admin/.env.development` 配置文件，关闭 https 后再次尝试启动项目；

  ```bash
  VITE_USE_HTTPS = false
  ```

- 启动成功后访问：https://localhost:3000，默认端口为3000.
:::
