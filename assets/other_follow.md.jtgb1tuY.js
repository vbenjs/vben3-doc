import{_ as e,c as t,o as r,a3 as i,a4 as l}from"./chunks/framework.CNR3DNuL.js";const g=JSON.parse('{"title":"🍻 贡献小手册","description":"","frontmatter":{},"headers":[],"relativePath":"other/follow.md","filePath":"other/follow.md","lastUpdated":1715381724000}'),a={name:"other/follow.md"},o=i('<h1 id="🍻-贡献小手册" tabindex="-1">🍻 贡献小手册 <a class="header-anchor" href="#🍻-贡献小手册" aria-label="Permalink to &quot;🍻 贡献小手册&quot;">​</a></h1><p>多人开发维护的项目，代码规范是必须有的，有利于项目的维护管理，前端有很多工具帮助我们完成这项任务例如 eslint、prettier 等。</p><h2 id="🧋-代码规范" tabindex="-1">🧋 代码规范 <a class="header-anchor" href="#🧋-代码规范" aria-label="Permalink to &quot;🧋 代码规范&quot;">​</a></h2><p>实际项目中一般采用 npm 或者其它的报管理器安装依赖的方式，确保多人合作时保证最终代码格式的统一。</p><p>本项目使用了以下工具：</p><ul><li><a href="https://eslint.org/" target="_blank" rel="noreferrer">Eslint</a>： ECMAScript/JavaScript 代码格式审查，兼有部分修复功能</li><li><a href="https://stylelint.io/" target="_blank" rel="noreferrer">Stylelint</a>： CSS 代码检查</li><li><a href="https://github.com/prettier/eslint-config-prettier" target="_blank" rel="noreferrer">eslint-config-prettier</a>：关闭所有可能干扰 Prettier 规则的 ESLint 规则。</li><li><a href="https://github.com/prettier/eslint-plugin-prettier" target="_blank" rel="noreferrer">eslint-plugin-prettier</a>：将 Prettier 规则转换为 ESLint 规则。</li><li><a href="https://github.com/vuejs/eslint-plugin-vue" target="_blank" rel="noreferrer">eslint-plugin-vue</a>： Eslint 针对 Vue 的模版语法检查</li><li><a href="https://prettier.io/" target="_blank" rel="noreferrer">Prettier</a>： 代码格式化/代码美化</li></ul><div class="tip custom-block"><p class="custom-block-title">说明</p><ul><li>VSCode 中安装的相关插件只是为了 <strong>个人使用方便</strong>，因为不是所有人开发都会使用 VSCode；即便使用，也不一定人人都安装这些插件。</li><li><code>xxxlint</code> 的工具一般都是检查规范的，出现语法问题时，会得到类似波浪线的提示，从而引起开发人员注意并修改。比如 markdownlint、scss-lint 等等。Linting 是一种静态分析，用于发现不符合某些样式准则的问题模式和代码。</li><li>Prettier 格式化时主观性很强（有自己的格式化方式，我们无法配置某些样式和风格），可能和我们个人或者团队的某些方面 “意见不合”。</li><li>由于同时使用 Eslint + Prettier 时会出现部分配置或者说风格上的差异，会出现冲突。我们会使用一些像 <code>eslint-config-prettier</code>、<code>eslint-plugin-prettier</code> 的 npm 包，前者帮助我们关闭冲突配置，后者将 Prettier 作为 lint 的插件使用。但是使用这些插件有一个副作用，你可能会在项目中看到一些红波浪线，即便代码本身并没有错。</li><li>ESLint、Prettier 流畅配合不是一件容易的事情，如果向往足够简单，使用 <code>eslint-config-prettier</code> 或者 <a href="https://github.com/prettier/prettier-eslint" target="_blank" rel="noreferrer">prettier-eslint</a> 就好。</li></ul></div><h2 id="pr" tabindex="-1">PR <a class="header-anchor" href="#pr" aria-label="Permalink to &quot;PR&quot;">​</a></h2><p><img src="'+l+'" alt="PR"></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>使用最新版的 Edge 浏览器把鼠标光标置于图像之上，按下两次 Ctrl 有惊喜！😜</p></div>',10),n=[o];function s(p,c,h,d,_,f){return r(),t("div",null,n)}const m=e(a,[["render",s]]);export{g as __pageData,m as default};
