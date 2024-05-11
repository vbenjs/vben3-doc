import{_ as s,c as a,o as n,a3 as i}from"./chunks/framework.CNR3DNuL.js";const b=JSON.parse('{"title":"介绍","description":"","frontmatter":{},"headers":[],"relativePath":"packages/demo/intro.md","filePath":"packages/demo/intro.md","lastUpdated":1710496048000}'),e={name:"packages/demo/intro.md"},l=i(`<h1 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h1><p><code>demo</code>： Vben3 示例存放目录。</p><h2 id="demo引用方式" tabindex="-1">demo引用方式 <a class="header-anchor" href="#demo引用方式" aria-label="Permalink to &quot;demo引用方式&quot;">​</a></h2><p>Vben3 的示例demo存放在 <code>packages/demo</code> 目录下，先在 <code>router</code> 目录下注册路由，再通过ESM方式引入项目modules中。</p><h2 id="组件列表" tabindex="-1">组件列表 <a class="header-anchor" href="#组件列表" aria-label="Permalink to &quot;组件列表&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">📁 demo</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">┣━━📁src</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  └── Account          </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 帐号列表组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  └── Analysis         </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 分析页组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  └── Basic            </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 基础页组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  └── Card             </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Card组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  └── Charts           </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 图表组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  └── CountTo          </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 计数组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  └── Department       </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 部门组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  └── Editor           </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 文本编辑器组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  └── Form             </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 表单组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  └── Menu             </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 菜单组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  └── Modal            </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Modal弹框组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  └── Password         </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 密码组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  └── QrCode           </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 二维码组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  └── Role             </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 角色管理组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  └── Scroll           </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 滚动条组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  └── Table            </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// table组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  └── Time             </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 时间组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  └── Workbench        </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 工作台首页</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,6),p=[l];function t(h,r,k,d,c,E){return n(),a("div",null,p)}const m=s(e,[["render",t]]);export{b as __pageData,m as default};
