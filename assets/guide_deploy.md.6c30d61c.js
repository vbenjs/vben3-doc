import{_ as s,o as n,c as a,a as l}from"./app.80d3e877.js";const d=JSON.parse('{"title":"构建 & 部署","description":"","frontmatter":{},"headers":[{"level":2,"title":"安装使用 pnpm","slug":"安装使用-pnpm","link":"#安装使用-pnpm","children":[]},{"level":2,"title":"下载 vben3 源代码","slug":"下载-vben3-源代码","link":"#下载-vben3-源代码","children":[]},{"level":2,"title":"项目结构","slug":"项目结构","link":"#项目结构","children":[]},{"level":2,"title":"配置说明","slug":"配置说明","link":"#配置说明","children":[{"level":3,"title":"通用配置 .env","slug":"通用配置-env","link":"#通用配置-env","children":[]},{"level":3,"title":"开发环境配置 .env.development","slug":"开发环境配置-env-development","link":"#开发环境配置-env-development","children":[]},{"level":3,"title":"生产环境配置 .env.production","slug":"生产环境配置-env-production","link":"#生产环境配置-env-production","children":[]}]},{"level":2,"title":"_app.config.js 相关","slug":"app-config-js-相关","link":"#app-config-js-相关","children":[{"level":3,"title":"如何获取","slug":"如何获取","link":"#如何获取","children":[]},{"level":3,"title":"如何新增","slug":"如何新增","link":"#如何新增","children":[]}]}],"relativePath":"guide/deploy.md","lastUpdated":1698148394000}'),p={name:"guide/deploy.md"},o=l(`<h1 id="构建-部署" tabindex="-1">构建 &amp; 部署 <a class="header-anchor" href="#构建-部署" aria-hidden="true">#</a></h1><h2 id="安装使用-pnpm" tabindex="-1">安装使用 pnpm <a class="header-anchor" href="#安装使用-pnpm" aria-hidden="true">#</a></h2><p>pnpm 支持 Monorepo，所以 vben3 采用 <a href="https://pnpm.io/" target="_blank" rel="noreferrer">pnpm</a> 构建项目。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># npm 设置淘宝镜像源</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">registry</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://registry.npmmirror.com</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 全局安装 pnpm</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pnpm</span></span>
<span class="line"></span></code></pre></div><p>如果已经配置过其它镜像源，只想临时使用一次淘宝的镜像源来下载 pnpm，使用以下命令：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--registry=http://registry.npmmirror.com</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pnpm</span></span>
<span class="line"></span></code></pre></div><div class="danger custom-block"><p class="custom-block-title">注意</p><ul><li>vben3 不支持 npm，如果强行使用 npm，将会造成无法预知的结果；</li><li>pnpm 安装后会默认使用 npm 设置的镜像源，只是为了下载速度的体验无需额外设置；</li></ul></div><h2 id="下载-vben3-源代码" tabindex="-1">下载 vben3 源代码 <a class="header-anchor" href="#下载-vben3-源代码" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># clone 仓库</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/vbenjs/vben3</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 安装依赖</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 启动项目</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>如果本项目是第一次在本地环境运行，启动项目的时候可能会弹出安装证书或者是否信任证书的弹框，选择安装或者是即可。</p></div><h2 id="项目结构" tabindex="-1">项目结构 <a class="header-anchor" href="#项目结构" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">|-- apps</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |-- admin</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |   |-- mock                        # mock 数据</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |   |-- public                      # 公共资源</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |   |-- src</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |   |   |-- apis                    # 请求api配置</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |   |   |-- assets                  # 静态资源</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |   |   |-- hooks</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |   |   |-- layout                  # 布局层，主要依赖于packages/layouts[可重载]</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |   |   |-- main.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |   |   |-- pages                   # 页面，自己写</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |   |   |-- router                  # 路由定义</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |   |   |-- setting                 # 项目配置</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |   |   |-- store                   # 状态管理</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |   |   |-- main.ts                 # 入口</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |   |   |-- init-application.ts     # 本地依赖初始化以及注入</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |   |-- .env                        # 环境配置</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |   |-- .env.development            # 开发环境配置</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |   |-- .env.production             # 生产环境配置</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |   |-- init-components.ts          # vbenComponent初始化，组件注册</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- configs                             # 项目配置相关</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |-- css-preprocess</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |-- lint                            # code lint 配置</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |-- tsconfig                        # ts 配置</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |-- vite                            # vite 配置</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- packages                            # 本地依赖库</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |-- components                      # 组件</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |-- constants                       # 静态参数，枚举等</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |-- demo                            # 演示代码[可删除]</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |-- directives                      # 指令集</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |-- grid-layouts                    # </span></span>
<span class="line"><span style="color:#A6ACCD;">|   |-- hooks                           # hooks</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |-- layouts                         # 框架布局</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |-- locale                          # 多语言</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |-- request                         # 请求依赖，默认axios</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |-- router                          #</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |-- stores                          # 登录数据保存</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |-- styles                          # 样式</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |-- types                           # 类型定义</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |-- utils                           # 工具函数集</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |-- vbenComponents</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- scripts                             # 项目脚本相关</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="配置说明" tabindex="-1">配置说明 <a class="header-anchor" href="#配置说明" aria-hidden="true">#</a></h2><p>对于框架的使用者来说，一般首先修改配置文件，进行定制化修改以符合自己业务/学习使用。环境配置推荐查看 Vite 的 <a href="https://vitejs.dev/guide/env-and-mode.html" target="_blank" rel="noreferrer">Env Variables and Modes</a>，对于理解很有帮助。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>只有以 VITE_ 开头的变量会被嵌入到客户端侧的包中， 访问方法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">console.log(i<wbr>mport.meta.env.VITE_PROT);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>以 VITE_GLOB_* 开头的的变量，在编译的时候，会被加入_app.config.js配置文件当中.</p></div><h3 id="通用配置-env" tabindex="-1">通用配置 .env <a class="header-anchor" href="#通用配置-env" aria-hidden="true">#</a></h3><p>该配置文件位于 <code>apps/admin/</code> 路径下，<code>.env</code> 无论在什么环境下都会被加载，因此公共的配置可以放在这里面。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 网站标题</span></span>
<span class="line"><span style="color:#FFCB6B;">VITE_GLOB_APP_TITLE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Vben</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Admin</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 简称，用于配置文件名字 不要出现空格、数字开头等特殊字符</span></span>
<span class="line"><span style="color:#FFCB6B;">VITE_GLOB_APP_SHORT_NAME</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vben_admin</span></span>
<span class="line"></span></code></pre></div><h3 id="开发环境配置-env-development" tabindex="-1">开发环境配置 .env.development <a class="header-anchor" href="#开发环境配置-env-development" aria-hidden="true">#</a></h3><p>项目以开发环境启动的时候加载该配置文件，该配置文件位于 <code>apps/admin/</code> 路径下。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 是否开启mock数据，关闭时需要自行对接后台接口</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_USE_MOCK=true</span></span>
<span class="line"><span style="color:#A6ACCD;"># 资源公共路径,需要以 /开头和结尾</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_PUBLIC_PATH=/</span></span>
<span class="line"><span style="color:#A6ACCD;"># 是否删除Console.log</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_DROP_CONSOLE=false</span></span>
<span class="line"><span style="color:#A6ACCD;"># 本地开发代理，可以解决跨域及多地址代理</span></span>
<span class="line"><span style="color:#A6ACCD;"># 如果接口地址匹配到，则会转发到http://localhost:3000，防止本地出现跨域问题</span></span>
<span class="line"><span style="color:#A6ACCD;"># 可以有多个，注意多个不能换行，否则代理将会失效</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_PROXY=[[&quot;/api&quot;,&quot;http://localhost:3000&quot;],[&quot;api1&quot;,&quot;http://localhost:3001&quot;],[&quot;/upload&quot;,&quot;http://localhost:3001/upload&quot;]]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 接口地址</span></span>
<span class="line"><span style="color:#A6ACCD;"># 如果没有跨域问题，直接在这里配置即可</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_GLOB_API_URL=/api</span></span>
<span class="line"><span style="color:#A6ACCD;"># 文件上传接口  可选</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_GLOB_UPLOAD_URL=/upload</span></span>
<span class="line"><span style="color:#A6ACCD;"># 接口地址前缀，有些系统所有接口地址都有前缀，可以在这里统一加，方便切换</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_GLOB_API_URL_PREFIX=</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p>这里配置的 <code>VITE_PROXY</code> 以及 <code>VITE_GLOB_API_URL</code>， /api 需要是唯一的，不要和接口已有的名字冲突。</p><p>如果你的接口是 <a href="http://localhost:3000/api" target="_blank" rel="noreferrer">http://localhost:3000/api</a> 之类的，请考虑将 VITE_GLOB_API_URL=/xxxx 换成别的名字。</p></div><h3 id="生产环境配置-env-production" tabindex="-1">生产环境配置 .env.production <a class="header-anchor" href="#生产环境配置-env-production" aria-hidden="true">#</a></h3><p>项目以生产环境启动的时候加载该配置文件，该配置文件位于 <code>apps/admin/</code> 路径下。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 是否开启mock</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_USE_MOCK=true</span></span>
<span class="line"><span style="color:#A6ACCD;"># 接口地址 可以由nginx做转发或者直接写实际地址</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_GLOB_API_URL=/api</span></span>
<span class="line"><span style="color:#A6ACCD;"># 文件上传地址 可以由nginx做转发或者直接写实际地址</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_GLOB_UPLOAD_URL=/upload</span></span>
<span class="line"><span style="color:#A6ACCD;"># 接口地址前缀，有些系统所有接口地址都有前缀，可以在这里统一加，方便切换</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_GLOB_API_URL_PREFIX=</span></span>
<span class="line"><span style="color:#A6ACCD;"># 是否删除Console.log</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_DROP_CONSOLE=true</span></span>
<span class="line"><span style="color:#A6ACCD;"># 资源公共路径,需要以 / 开头和结尾</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_PUBLIC_PATH=/</span></span>
<span class="line"><span style="color:#A6ACCD;"># 打包是否输出gz｜br文件</span></span>
<span class="line"><span style="color:#A6ACCD;"># 可选: gzip | brotli | none</span></span>
<span class="line"><span style="color:#A6ACCD;"># 也可以有多个, 例如 ‘gzip’|&#39;brotli&#39;,这样会同时生成 .gz和.br文件</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_BUILD_COMPRESS = &#39;gzip&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"># 打包是否压缩图片</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_USE_IMAGEMIN = false</span></span>
<span class="line"><span style="color:#A6ACCD;"># 打包是否开启pwa功能</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_USE_PWA = false</span></span>
<span class="line"><span style="color:#A6ACCD;"># 是否兼容旧版浏览器。开启后打包时间会慢一倍左右。会多打出旧浏览器兼容包,且会根据浏览器兼容性自动使用相应的版本</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_LEGACY = false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="app-config-js-相关" tabindex="-1">_app.config.js 相关 <a class="header-anchor" href="#app-config-js-相关" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">作用</p><p>_app.config.js 用于项目在打包后，需要动态修改配置的需求，如接口地址，不用重新进行打包，可在打包后修改 <code>/dist/_app.config.js</code> 内的变量，刷新即可更新代码内的局部变量。</p></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// _app.config.js</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 变量名命名规则  __PRODUCTION__xxx_CONF__   xxx：为.env配置的VITE_GLOB_APP_SHORT_NAME</span></span>
<span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">__PRODUCTION__VUE_VBEN_ADMIN__CONF__ </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">VITE_GLOB_APP_TITLE</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vben admin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">VITE_GLOB_APP_SHORT_NAME</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue_vben_admin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">VITE_GLOB_API_URL</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">VITE_GLOB_API_URL_PREFIX</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">VITE_GLOB_UPLOAD_URL</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/upload</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><h3 id="如何获取" tabindex="-1">如何获取 <a class="header-anchor" href="#如何获取" aria-hidden="true">#</a></h3><p>想要获取 <code>_app.config.js</code> 内的变量，可以使用 <code>src/hooks/setting/index.ts</code> 提供的函数来进行获取。</p><h3 id="如何新增" tabindex="-1">如何新增 <a class="header-anchor" href="#如何新增" aria-hidden="true">#</a></h3><ol><li>首先在 .env 或者对应的开发环境配置文件内，新增需要可动态配置的变量，需要以 VITE_GLOB_开头；</li><li>VITE_GLOB_ 开头的变量会自动加入环境变量，通过在 src/types/config.d.ts 内修改 GlobEnvConfig 和 GlobConfig 两个环境变量的值来定义新添加的类型；</li><li>useGlobSetting 函数中添加刚新增的返回值即可；</li></ol><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  VITE_GLOB_APP_TITLE</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  VITE_GLOB_API_URL</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  VITE_GLOB_APP_SHORT_NAME</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  VITE_GLOB_API_URL_PREFIX</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  VITE_GLOB_UPLOAD_URL</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ENV</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> useGlobSetting </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SettingWrap</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Take global configuration</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">glob</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Readonly</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">GlobConfig</span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    title</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">VITE_GLOB_APP_TITLE</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    apiUrl</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">VITE_GLOB_API_URL</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    shortName</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">VITE_GLOB_APP_SHORT_NAME</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    urlPrefix</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">VITE_GLOB_API_URL_PREFIX</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    uploadUrl</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">VITE_GLOB_UPLOAD_URL</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">glob</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Readonly</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">GlobConfig</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div>`,33),e=[o];function c(t,r,i,C,A,y){return n(),a("div",null,e)}const F=s(p,[["render",c]]);export{d as __pageData,F as default};
