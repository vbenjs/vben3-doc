
import { version } from '../../package.json';

const nav = [
  {
    text: "在线预览",
    link: "https://vben.mufei88.com/"
  },
  {
    text: "指南",
    items: [
      { text: "快速了解", link: "/guide/quick-understanding" },
      { text: "路由", link: "/guide/router" },
      { text: "配置", link: "/guide/config" },
    ],
  },
  {
    text: "组件",
    items: getPackagesIntro(),
  },
  {
    text: "集成",
    items: [
      { text: '图标', link: '/packages/vbenComponent/icons'},
      { text: '测试', link: '/packages/vbenComponent/test'}
    ]
  },
  {
    text: "社区",
    items: [
      {
        text: "KOOK",
        link: "https://kook.top/6ZPFKi",
      },
      {
        text: "QQ频道",
        link: "https://pd.qq.com/s/ahgh62mni",
      },
      {
        text: "源码仓库",
        link: "https://github.com/vbenjs/vben3",
      },
      {
        text: "文档仓库",
        link: "https://github.com/vbenjs/vben3-doc",
      },
    ],
  },
  {
    text: version,
    items: [
      {
        text: "更新日志",
        link: "https://github.com/vbenjs/vben3/blob/master/CHANGELOG.md",
      }
      
    ]
  }
];

const sidebar = [
  {
    text: "指南",
    items: [
      { text: "介绍", link: "/guide/introduction" },
      { text: "快速了解", link: "/guide/quick-understanding" },
      { text: "构建 & 部署", link: "/guide/deploy" },
      { text: "配置", link: "/guide/config" },
      { text: "路由", link: "/guide/router" },
    ],
  },
  {
    text: "本地依赖库",
    collapsible: true,
    items: getPackagesIntro(),
  },
  {
    text: "其它",
    items: [
      { text: "常见问题", link: "/other/faq" },
      { text: "添砖加瓦", link: "/other/follow" },
    ],
  },
];

function getPackagesIntro() {
  return [
    "vbenComponent",
    "components",
    "layouts",
    "locale",
    "constants",
    "demo",
    "hooks",
    "request",
    "styles",
    "types",
    "utils",
  ].map((k) => {
    return {
      text: k,
      link: `/packages/${k}/intro`,
    };
  });
}

export default {
  title: "Vben Admin 3",
  description: "Vben Admin 3 Doc",
  base: "/vben3-doc/",
  head: [['link', {rel: 'icon', href: '/vben3-doc/vben.png'}]],
  ignoreDeadLinks: true,

  markdown: {
    lineNumbers: true
  },
  
  lastUpdated: true,
  outDir: "../public",
  themeConfig: {
    logo: "/vben.svg",
    darkModeSwitchLabel: "Dark",
    outline: {
      label: "本文目录"
    },
    search: {
      provider: 'local'
    },
    nav,
    sidebar,
    socialLinks: [{ icon: "github", link: "https://github.com/vbenjs/vben3" }],
    editLink: {
      pattern: "https://github.com/vbenjs/vben3-doc/edit/master/docs/:path",
      text: "帮助完善本页！",
    },
    footer: {
      copyright: `MIT License Copyright ©️ 2024-present Vben`
    },
  },
};
