import{_ as e,o as s,c as a,a as t}from"./app.23af2f2a.js";const b=JSON.parse('{"title":"快速了解","description":"","frontmatter":{},"headers":[{"level":2,"title":"功能特性","slug":"功能特性","link":"#功能特性","children":[{"level":3,"title":"🧩 框架无关","slug":"框架无关","link":"#框架无关","children":[]},{"level":3,"title":"🌿 Turborepo架构","slug":"turborepo架构","link":"#turborepo架构","children":[]},{"level":3,"title":"🚀 快速开发","slug":"快速开发","link":"#快速开发","children":[]}]},{"level":2,"title":"内置功能","slug":"内置功能","link":"#内置功能","children":[]},{"level":2,"title":"技术选型","slug":"技术选型","link":"#技术选型","children":[]},{"level":2,"title":"浏览器支持","slug":"浏览器支持","link":"#浏览器支持","children":[]}],"relativePath":"guide/quick-understanding.md","lastUpdated":1709085289000}'),n={name:"guide/quick-understanding.md"},r=t(`<h1 id="快速了解" tabindex="-1">快速了解 <a class="header-anchor" href="#快速了解" aria-hidden="true">#</a></h1><h2 id="功能特性" tabindex="-1">功能特性 <a class="header-anchor" href="#功能特性" aria-hidden="true">#</a></h2><h3 id="框架无关" tabindex="-1">🧩 框架无关 <a class="header-anchor" href="#框架无关" aria-hidden="true">#</a></h3><p>vben3不与任何框架深度集成，开发者可以选择自己中意的框架进行开发🥰。</p><p>默认情况下，vben3的示例demo采用<a href="https://www.naiveui.com/zh-CN/light" target="_blank" rel="noreferrer">Naive UI</a>框架进行编写。</p><h3 id="turborepo架构" tabindex="-1">🌿 Turborepo架构 <a class="header-anchor" href="#turborepo架构" aria-hidden="true">#</a></h3><p>采用比Monorepo更优秀的Turborepo架构，提升构建体验😎</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>点击 <a href="https://turbo.build/repo/docs/core-concepts/monorepos" target="_blank" rel="noreferrer">此处</a> 查看Turborepo对Monorepo的优势</p></div><h3 id="快速开发" tabindex="-1">🚀 快速开发 <a class="header-anchor" href="#快速开发" aria-hidden="true">#</a></h3><p>每个开发者都有自己用的习惯或顺手的轮子进行快速开发。</p><p>在vben3里，我们将轮子与业务彻底解耦，开发者可以引入自己熟悉的轮子或者直接引用vben3封装完成的轮子进行快速开发，从而大大节省时间和精力😍。</p><details class="details custom-block"><summary>Details</summary><p>但是，任何轮子都需要时间进行学习，我们将vben3的框架工具类在本文档进行详尽编写，任何你觉得有疑问的地方都可以先查询本文档🤔。</p></details><h2 id="内置功能" tabindex="-1">内置功能 <a class="header-anchor" href="#内置功能" aria-hidden="true">#</a></h2><p>vben3内置功能存放在<code>packages</code>目录下：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">📁 packages</span></span>
<span class="line"><span style="color:#A6ACCD;">  ┣━ 📁components </span><span style="color:#89DDFF;">--------------</span><span style="color:#A6ACCD;"> 存放自定义组件</span></span>
<span class="line"><span style="color:#A6ACCD;">  ┣━ 📁constants </span><span style="color:#89DDFF;">---------------</span><span style="color:#A6ACCD;"> 存放全局常量枚举</span></span>
<span class="line"><span style="color:#A6ACCD;">  ┣━ 📁demo </span><span style="color:#89DDFF;">--------------------</span><span style="color:#A6ACCD;"> 示例demo</span></span>
<span class="line"><span style="color:#A6ACCD;">  ┣━ 📁directives </span><span style="color:#89DDFF;">--------------</span><span style="color:#A6ACCD;"> 存放自定义指令</span></span>
<span class="line"><span style="color:#A6ACCD;">  ┣━ 📁hooks </span><span style="color:#89DDFF;">-------------------</span><span style="color:#A6ACCD;"> 存放hooks工具类</span></span>
<span class="line"><span style="color:#A6ACCD;">  ┣━ 📁locale </span><span style="color:#89DDFF;">------------------</span><span style="color:#A6ACCD;"> 存放多语言本地化i18n相关</span></span>
<span class="line"><span style="color:#A6ACCD;">  ┣━ 📁request </span><span style="color:#89DDFF;">-----------------</span><span style="color:#A6ACCD;"> 存放http请求工具类</span></span>
<span class="line"><span style="color:#A6ACCD;">  ┣━ 📁router </span><span style="color:#89DDFF;">------------------</span><span style="color:#A6ACCD;"> 存放router路由工具类</span></span>
<span class="line"><span style="color:#A6ACCD;">  ┣━ 📁stores </span><span style="color:#89DDFF;">------------------</span><span style="color:#A6ACCD;"> 存放状态管理库工具类</span></span>
<span class="line"><span style="color:#A6ACCD;">  ┣━ 📁style </span><span style="color:#89DDFF;">-------------------</span><span style="color:#A6ACCD;"> 存放主题配置相关类 </span></span>
<span class="line"><span style="color:#A6ACCD;">  ┣━ 📁types </span><span style="color:#89DDFF;">-------------------</span><span style="color:#A6ACCD;"> 存放类型定义配置文件类 </span></span>
<span class="line"><span style="color:#A6ACCD;">  ┣━ 📁utils </span><span style="color:#89DDFF;">-------------------</span><span style="color:#A6ACCD;"> 存放工具类相关</span></span>
<span class="line"><span style="color:#A6ACCD;">  ┣━ 📁vbenComponents </span><span style="color:#89DDFF;">----------</span><span style="color:#A6ACCD;"> 存放封装好的第三方组件</span></span>
<span class="line"><span style="color:#A6ACCD;">  ┣━ 📁grid</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">layouts </span><span style="color:#89DDFF;">------------</span><span style="color:#A6ACCD;"> 存放布局相关工具类</span></span>
<span class="line"></span></code></pre></div><h2 id="技术选型" tabindex="-1">技术选型 <a class="header-anchor" href="#技术选型" aria-hidden="true">#</a></h2><p>采用技术以及版本号清单……</p><ul><li>Vite</li><li>TypeScript</li><li>pnpm &amp; monorepo</li><li>其它</li></ul><h2 id="浏览器支持" tabindex="-1">浏览器支持 <a class="header-anchor" href="#浏览器支持" aria-hidden="true">#</a></h2><p><strong>本地开发</strong> 推荐使用最新版的 <code>Chrome</code> 浏览器，<strong>不支持</strong><code>Chrome 80</code>以下版本。</p><p><strong>生产环境</strong> 支持现代浏览器，不支持 IE。</p><table><thead><tr><th style="text-align:center;"><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png" alt="IE" width="24px" height="24px"></a>IE</th><th style="text-align:center;"><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px"></a>Edge</th><th style="text-align:center;"><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px"></a>Firefox</th><th style="text-align:center;"><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px"></a>Chrome</th><th style="text-align:center;"><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px"></a>Safari</th></tr></thead><tbody><tr><td style="text-align:center;">not support</td><td style="text-align:center;">last 2 versions</td><td style="text-align:center;">last 2 versions</td><td style="text-align:center;">last 2 versions</td><td style="text-align:center;">last 2 versions</td></tr></tbody></table>`,22),l=[r];function o(p,i,c,h,d,g){return s(),a("div",null,l)}const C=e(n,[["render",o]]);export{b as __pageData,C as default};
