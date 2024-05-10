# 配置说明

## 环境变量

Vite 从 dotenv 文件读取环境变量，例如 `.env`、`.env.[mode]` 等文件。`.env.[mode]` 这种形式配置相比于 `.env` 具有 **更高的优先级**，即 `.env.xxx` 会覆盖 `.env` 的 **相同配置**。

- `.env`：所有情况下都会被加载，所以可以放置通用配置，例如开发、测试、生产等等环境所需的公共变量
- `.env.development`：开发环境配置，dev 模式启动读取
- `.env.production`：生产环境配置，build 模式启动读取

:::tip

- 只有前缀 `VITE_` 的变量才会暴露给 Vite 处理的代码，并且 Vite 在解析时会把变量全部 **读取为字符串**，所以在使用时需要自己转为需要的类型。

- 默认情况下，vite 在 `dev` 命令下使用 development 模式运行，`build` 命令在 production 模式下运行。

- 更多使用方法参考 [Vite#Env Variables and Modes](https://vitejs.dev/guide/env-and-mode.html)。

:::

## 关于 _app.config.js

:::info 作用
_app.config.js 用于项目在打包后，需要动态修改配置的需求，如接口地址，不用重新进行打包，可在打包后修改 `/dist/_app.config.js` 内的变量，刷新即可更新代码内的局部变量。
:::

```ts
// _app.config.js
// 变量名命名规则  __PRODUCTION__xxx_CONF__   xxx：为.env配置的VITE_GLOB_APP_SHORT_NAME
window.__PRODUCTION__VUE_VBEN_ADMIN__CONF__ = {
  VITE_GLOB_APP_TITLE: 'vben admin',
  VITE_GLOB_APP_SHORT_NAME: 'vue_vben_admin',
  VITE_GLOB_API_URL: '/app',
  VITE_GLOB_API_URL_PREFIX: '/',
  VITE_GLOB_UPLOAD_URL: '/upload',
};
```

### 如何获取

想要获取 `_app.config.js` 内的变量，可以使用 `src/hooks/setting/index.ts` 提供的函数来进行获取。

### 如何新增

1. 首先在 .env 或者对应的开发环境配置文件内，新增需要可动态配置的变量，需要以 VITE_GLOB_开头；
2. VITE_GLOB_ 开头的变量会自动加入环境变量，通过在 src/types/config.d.ts 内修改 GlobEnvConfig 和 GlobConfig 两个环境变量的值来定义新添加的类型；
3. useGlobSetting 函数中添加刚新增的返回值即可；

```ts
const {
  VITE_GLOB_APP_TITLE,
  VITE_GLOB_API_URL,
  VITE_GLOB_APP_SHORT_NAME,
  VITE_GLOB_API_URL_PREFIX,
  VITE_GLOB_UPLOAD_URL,
} = ENV;

export const useGlobSetting = (): SettingWrap => {
  // Take global configuration
  const glob: Readonly<GlobConfig> = {
    title: VITE_GLOB_APP_TITLE,
    apiUrl: VITE_GLOB_API_URL,
    shortName: VITE_GLOB_APP_SHORT_NAME,
    urlPrefix: VITE_GLOB_API_URL_PREFIX,
    uploadUrl: VITE_GLOB_UPLOAD_URL
  };
  return glob as Readonly<GlobConfig>;
};
```

## 项目仓库管理方式

`pnpm-workspace.yaml` 是 monorepo 方式管理的标志。

```yaml pnpm-workspace.yaml
packages:
  - 'packages/*'
  - 'apps/*'
  - 'configs/*'
  - 'scripts'
```

该文件表示告诉 pnpm 该项目/存储库是一个 monorepo 项目，并且该项目有如上四个 workspace，分别位于 `packages`、`apps`、`configs`、`scripts`，这些文件夹内都是独立的 app 或者 pkg。想要了解有关 workspace 的更多内容，请👉[这里](https://www.pnpm.cn/workspaces)。

使用这种方式管理的好处就是可以重复的使用以前造好的轮子，并且很方便的使用，而不用在不同项目间来回的拷贝。对于自己公司内部的前端业务个人认为是最适合不过的，所有前端项目都可以在一个仓库下管理，统一风格和工具，便于维护。

如果想要切换某些工具，那么就使用新玩具封装成趁手的利器，在需要使用的业务模块中引入即可，也不干扰其它工具。

如果是外包也可以使用，开发完交付后业务模块的代码交给客户，就可以删掉接入其它新项目。

### 🌰 小栗子

以本项目为例，`packages/utils` 下面有很多工具类，都是使用不同的库进行封装的，在需要使用的地方导入后调用就完事儿啦。

那么问题来了，如果要是自己在 packages 中新建其它的组件呢？

假设现在准备将 Vue 的状态管理工具从 Vuex 切换到 Pinia，为了使用更加的方便，我们决定自己封装一下放进项目中，同时呢，也不删除以前已经封装好的 Vuex。然后将业务模块中使用的 Vuex 替换成 Pinia。这该如何做呢？

第一时间想到的就是基于 Pinia 封装，然后在使用的模块中安装、导入、调用，我们来 try 一下！这和把大象装进冰箱的步骤一样：

1. 在 `packages` 目录下初始化一个状态管理模块；

    ```bash
    cd packages
    mkdir pinia-store && cd pinia-store
    pnpm init
    ```

2. 根据自己需要完善 `package.json`，然后在创建入口文件添加相应的方法（如果需要添加 ts 的配置等相关内容，创建并填充 `tsconfig.json`，此处示例不需要）；

    ```bash secret/package.json
    {
      "name": "@vben/pinia-store",
      "private": true,
      "version": "0.0.1",
      "author": "vben",
      # 指定入口文件，不然引入时飘红~
      "main": "path/入口文件"
    }
    ```

3. 在需要使用的模块中安装依赖，然后就可以愉快的调用啦；

    ```bash
    # 进入对应的业务模块的路径
    cd app/admin
    # 添加依赖
    pnpm add @vben/pinia-store
    ```

    :::danger 添加依赖时可能会出现以下错误：

    ```bash
    $ pnpm add @vben/pinia-store
       ERR_PNPM_FETCH_404  GET https://registry.npmmirror.com/@vben%2Fexample: Not Found - 404

      This error happened while installing a direct dependency of YourLocalPath

      @vben/pinia-store is not in the npm registry, or you have no permission to fetch it.

      No authorization header was set for the request.
      ../..                                    | Progress: resolved 110, reused 110, downloaded 0, added 0
    ```

    如果失败，可以 **手动** 在需要使用该工具的业务模块的 `package.json` 文件中添加依赖，然后再使用 `pnpm i` 即可完成安装并导入该工具进行使用。

    ```json
    {
      "devDependencies": {
        ...
        "@vben/pinia-store": "workspace:*"
      }
    }
    ```

    :::

### 在根目录中使用命令行直接对 apps 中的核心业务模块添加依赖

1. 在 **根目录** 的 `package.json` 文件中添加以下内容：

```json
{
  ...
  scripts: {
    ...
    "admin": "pnpm --filter @apps/admin"
  }
  ...
}
```

2. 配置之后就可以直接在项目的 **根目录** 中为指定模块安装相应的依赖（注意：此种方式的命令 **必须在项目的根目录** 中执行）：

```bash
pnpm admin add [package]
```
