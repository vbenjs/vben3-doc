import{_ as s,o as n,c as a,a as p}from"./app.3a206e79.js";const D=JSON.parse('{"title":"项目结构","description":"","frontmatter":{},"headers":[{"level":2,"title":"apps","slug":"apps","link":"#apps","children":[]},{"level":2,"title":"configs","slug":"configs","link":"#configs","children":[]},{"level":2,"title":"packages","slug":"packages","link":"#packages","children":[]}],"relativePath":"guide/directory.md","lastUpdated":1698300353000}'),l={name:"guide/directory.md"},e=p(`<h1 id="项目结构" tabindex="-1">项目结构 <a class="header-anchor" href="#项目结构" aria-hidden="true">#</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">|-- apps</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |-- admin</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |   |-- mock                        # mock 数据</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |   |-- public                      # 公共资源</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |   |-- src</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |   |   |-- apis                    # 请求api配置</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |   |   |-- assets                  # 静态资源</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |   |   |-- hooks</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |   |   |-- layout                  # 布局层，主要依赖于packages/layouts[可重载]</span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="apps" tabindex="-1">apps <a class="header-anchor" href="#apps" aria-hidden="true">#</a></h2><p>此目录一般为我们自己开发的业务模块，例如本项目的 <code>apps/admin</code> 模块，该模块有着本系统的核心代码。如果后续有不同的业务，可以在该目录中添加新的模块，统一管理。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果你是一个有微服务经验的开发者，尤其是了解后端的，这很好理解😘</p></div><h2 id="configs" tabindex="-1">configs <a class="header-anchor" href="#configs" aria-hidden="true">#</a></h2><p>该目录中放置项目的配置文件，例如 ts、vite、lint、css 等相关配置。</p><h2 id="packages" tabindex="-1">packages <a class="header-anchor" href="#packages" aria-hidden="true">#</a></h2><p>该目录中存放业务模块中使用的库，通常我们称之为 <strong>本地依赖库</strong>，这些依赖库或在第三方库的基础上进行再封装（request），或全部由自己开发（<a href="/vben3-doc/guide/config.html#关于-pnpm-workspace-yaml">secret示例</a>），或两者混合而成（utils）。不论如何，这样的结构提高了这些代码复用，虽然目录层级什么的多了很多，但是项目一旦大起来，这是必然发生的。只要理清了脉络，很简单，不是么✌️</p>`,9),o=[e];function c(t,i,r,C,A,d){return n(),a("div",null,o)}const h=s(l,[["render",c]]);export{D as __pageData,h as default};
