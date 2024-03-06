const nav = [
  {
    text: "指南",
    items: [
      { text: "介绍", link: "/guide/introduction" },
      { text: "项目结构", link: "/guide/directory" },
      { text: "路由", link: "/guide/router" },
      { text: "配置", link: "/guide/config" },
    ],
  },
  {
    text: "组件",
    items: [
      { text: "介绍", link: "/packages/vbenComponent/introduction" },
      { text: "Fetch扩展", link: "/packages/vbenComponent/fetch" },
    ],
  },
  {
    text: "社区",
    items: [
      {
        text: "QQ频道",
        link: "https://pd.qq.com/s/ahgh62mni",
      },
      {
        text: "QQ群1 4286109",
      },
        {
        text: "QQ群2 435706828",
      },
    ],
  },
];

const sidebar = [
  {
    text: "指南",
    items: [
      { text: "介绍", link: "/guide/introduction" },
      { text: "快速了解", link: "/guide/quick-understanding" },
      { text: "项目结构", link: "/guide/directory" },
      { text: "构建 & 部署", link: "/guide/deploy" },
      { text: "配置", link: "/guide/config" },
      { text: "路由", link: "/guide/router" },
      { text: "更新日志", link: "/guide/uplog" },
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
      { text: "加入我们", link: "/other/follow" },
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
  repo: "vbenjs/vben3-doc",
  ignoreDeadLinks: true,
  lastUpdated: true,
  outDir: "../public",
  themeConfig: {
    logo: "/vben.svg",
    darkModeSwitchLabel: "Dark",
    nav,
    sidebar,
    socialLinks: [{ icon: "github", link: "https://github.com/vbenjs/vben3" }],
    editLink: {
      pattern: "https://github.com/vbenjs/vben3-doc/edit/master/docs/:path",
      text: "编辑此页",
    },
    footer: {
      copyright: `MIT License Copyright ©️ 2024-present Vben`
    },
  },
};
