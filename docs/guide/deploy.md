# 构建 & 部署

## 前置环境

- [Git](https://git-scm.com)
- [NodeJs 18.x +](https://nodejs.org/en)
- [pnpm](https://pnpm.io/) 包管理器
- 自己喜欢的 IDE

## 快速部署

### 配置下载依赖镜像地址

:::code-group

```bash [淘宝镜像源]
npm config set registry https://registry.npmmirror.com
```

```bash [腾讯镜像源]
npm config set registry https://mirrors.cloud.tencent.com/npm/
```

:::

### 启动项目

```bash
git clone https://github.com/vbenjs/vben3.git
# 安装依赖
pnpm i
# 以开发模式启动项目
pnpm dev
```

:::danger 注意

- 该项目不支持 npm，如果强行使用，将会造成无法预知的结果；
- pnpm 安装后默认使用 npm 配置的镜像源地址，如果您需要更多配置，可以参阅：https://pnpm.io/configuring

:::
