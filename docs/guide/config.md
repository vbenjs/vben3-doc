# 配置

## 环境变量配置

:::info 
项目的环境变量配置位于项目根目录下的  
.env  
.env.development  
.env.production
:::
:::warning
只有以 VITE_ 开头的变量会被嵌入到客户端侧的包中， 访问方法：
```
console.log(import.meta.env.VITE_PROT);
```
  
以 VITE_GLOB_* 开头的的变量，在编译的时候，会被加入_app.config.js配置文件当中.
:::

## .env 通用环境变量
```
# 端口号
VITE_PORT=3100
# 网站标题
VITE_GLOB_APP_TITLE=vben admin
# 简称，用于配置文件名字 不要出现空格、数字开头等特殊字符
VITE_GLOB_APP_SHORT_NAME=vben_admin
```

## .env.development 开发环境变量
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

这里配置的 VITE_PROXY 以及 VITE_GLOB_API_URL, /api 需要是唯一的，  
不要和接口有的名字冲突  

如果你的接口是 http://localhost:3000/api 之类的，   
请考虑将 VITE_GLOB_API_URL=/xxxx 换成别的名字
:::
## .env.production 生产环境变量
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
## _app.config.js 相关
:::info 作用
_app.config.js 用于项目在打包后，需要动态修改配置的需求，  
如接口地址。不用重新进行打包，
可在打包后修改 /dist/_app.config.js 内的变量,  
刷新即可更新代码内的局部变量。
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
想要获取 _app.config.js 内的变量，可以使用 src/hooks/setting/index.ts 提供的函数来进行获取

### 如何新增
1. 首先在 .env 或者对应的开发环境配置文件内，新增需要可动态配置的变量，需要以 VITE_GLOB_开头
2. VITE_GLOB_ 开头的变量会自动加入环境变量，通过在 src/types/config.d.ts 内修改 GlobEnvConfig 和 GlobConfig 两个环境变量的值来定义新添加的类型
3. useGlobSetting 函数中添加刚新增的返回值即可

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

