# 配置说明

## 关于环境配置

对于系统的使用者来说，一般首先修改配置文件，进行定制化修改以符合自己业务/学习使用。环境配置推荐查看 Vite 官网的 [Env Variables and Modes](https://vitejs.dev/guide/env-and-mode.html) 说明，对于理解很有帮助。

:::tip
只有以 VITE_ 开头的变量会被嵌入到客户端侧的包中， 访问方法：
```
console.log(import.meta.env.VITE_PROT);
```
以 VITE_GLOB_* 开头的的变量，在编译的时候，会被加入_app.config.js配置文件当中.
:::

### 通用配置 .env

该配置文件位于 `apps/admin/` 路径下，`.env` 无论在什么环境下都会被加载，因此公共的配置可以放在这里面。

```bash apps/admin/.env
# 网站标题
VITE_GLOB_APP_TITLE = Vben Admin
# 简称，用于配置文件名字 不要出现空格、数字开头等特殊字符
VITE_GLOB_APP_SHORT_NAME = vben_admin
```

### 开发环境配置 .env.development

项目以开发环境启动的时候加载该配置文件，该配置文件位于 `apps/admin/` 路径下。

```
# 是否开启mock数据，关闭时需要自行对接后台接口
VITE_USE_MOCK=true
# 资源公共路径,需要以 /开头和结尾
VITE_PUBLIC_PATH=/
# 是否删除Console.log
VITE_DROP_CONSOLE=false
# 本地开发代理，可以解决跨域及多地址代理
# 如果接口地址匹配到，则会转发到http://localhost:3000，防止本地出现跨域问题
# 可以有多个，注意多个不能换行，否则代理将会失效
VITE_PROXY=[["/api","http://localhost:3000"],["api1","http://localhost:3001"],["/upload","http://localhost:3001/upload"]]
# 接口地址
# 如果没有跨域问题，直接在这里配置即可
VITE_GLOB_API_URL=/api
# 文件上传接口  可选
VITE_GLOB_UPLOAD_URL=/upload
# 接口地址前缀，有些系统所有接口地址都有前缀，可以在这里统一加，方便切换
VITE_GLOB_API_URL_PREFIX=
```
:::warning 注意

这里配置的 `VITE_PROXY` 以及 `VITE_GLOB_API_URL`， /api 需要是唯一的，不要和接口已有的名字冲突。

如果你的接口是 http://localhost:3000/api 之类的，请考虑将 VITE_GLOB_API_URL=/xxxx 换成别的名字。
:::

### 生产环境配置 .env.production

项目以生产环境启动的时候加载该配置文件，该配置文件位于 `apps/admin/` 路径下。

```
# 是否开启mock
VITE_USE_MOCK=true
# 接口地址 可以由nginx做转发或者直接写实际地址
VITE_GLOB_API_URL=/api
# 文件上传地址 可以由nginx做转发或者直接写实际地址
VITE_GLOB_UPLOAD_URL=/upload
# 接口地址前缀，有些系统所有接口地址都有前缀，可以在这里统一加，方便切换
VITE_GLOB_API_URL_PREFIX=
# 是否删除Console.log
VITE_DROP_CONSOLE=true
# 资源公共路径,需要以 / 开头和结尾
VITE_PUBLIC_PATH=/
# 打包是否输出gz｜br文件
# 可选: gzip | brotli | none
# 也可以有多个, 例如 ‘gzip’|'brotli',这样会同时生成 .gz和.br文件
VITE_BUILD_COMPRESS = 'gzip'
# 打包是否压缩图片
VITE_USE_IMAGEMIN = false
# 打包是否开启pwa功能
VITE_USE_PWA = false
# 是否兼容旧版浏览器。开启后打包时间会慢一倍左右。会多打出旧浏览器兼容包,且会根据浏览器兼容性自动使用相应的版本
VITE_LEGACY = false
```

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

## 关于 pnpm-workspace.yaml

```yaml pnpm-workspace.yaml
packages:
  - 'packages/*'
  - 'apps/*'
  - 'configs/*'
  - 'scripts'
```

该文件表示告诉 pnpm 该项目/存储库是一个 monorepo 项目，并且该项目有如上四个 workspace，分别位于 `packages`、`apps`、`configs`、`scripts`，这些文件夹内都是独立的 app 或者 pkg。想要了解有关 workspace 的更多内容，请👉[这里](https://www.pnpm.cn/workspaces)。

举个例子，我们在项目中一般需要 **使用/封装** 工具类，并把该类放在统一的包下面，利于管理。以本项目为例，`packages/utils` 下面有多个工具类，那么如何引入到 app 下面呢？

首先想到的就是安装、导入、调用，我们来 try 一下！

```bash
# 进入到需要使用工具类的 app 模块
cd apps/admin
# 添加 pkg 下的工具类
pnpm add @vben/utils
```

然后就可以在 app 中导入并正常使用 `packages/utils` 中的工具啦！欸，欸，欸，不对呀，那我要是自己在 packages 中新建其它的库呢？

:::tip 小栗子
好，假设我们现在需要自定义一个小小的加/解密的库，并把该库放到 packages 下，然后在 app 的模块中引入，这该如何做呢？
:::

1. 在 `packages` 目录下初始化库；

    ```bash
    cd packages
    mkdir secret && cd secret
    pnpm init
    ```

2. 修改 `package.json`，然后在创建入口文件添加相应的方法（如果需要添加 ts 的配置等相关内容，创建并填充 `tsconfig.json`，此处示例不需要）；

    ```bash secret/package.json
    {
      "name": "@vben/secret",
      "private": true,
      "version": "0.0.1",
      "author": "vben",
      # 指定入口文件，不然引入时飘红~
      "main": "path/入口文件"
    }
    ```

3. 在需要使用的模块中安装依赖，然后就可以调用啦；

    ```bash
    cd app/admin
    # 添加依赖
    pnpm add @vben/secret
    ```

    :::danger 添加依赖时可能会出现以下错误：
    

    ```bash
    $ pnpm add @vben/secret
       ERR_PNPM_FETCH_404  GET https://registry.npmmirror.com/@vben%2Fexample: Not Found - 404

      This error happened while installing a direct dependency of YourLocalPath

      @vben/secret is not in the npm registry, or you have no permission to fetch it.

      No authorization header was set for the request.
      ../..                                    | Progress: resolved 110, reused 110, downloaded 0, added 0
    ```

    如果失败，可以 **手动** 在应用该库模块的 `package.json` 文件中添加依赖，然后使用 `pnpm i` 即可完成安装，之后就可以导入该工具方法并使用啦。

    ```json
    {
      "devDependencies": {
        ...
        "@vben/secret": "workspace:*"
      }
    }
    ```
    :::

### 在根目录中使用命令行直接对 apps 中的模块添加依赖

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

