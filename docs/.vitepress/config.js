const nav = [
  {
    text: "指南",
    items: [
      { text: "介绍", link: "/guide/introduction" },
      { text: "项目结构", link: "/guide/directory" },
    ],
  },
  {
    text: "vbenComponent",
    items: [
      { text: "介绍", link: "/packages/vbenComponent/introduction" },
      { text: "Fetch扩展", link: "/packages/vbenComponent/fetch" },
    ],
  },
  {
    text: "社区",
    items: [
      {
        text: "KOOK",
        link: "https://kook.top/6ZPFKi",
      },
      {
        text: "QQ群  569291866",
        link: "",
      },
      {
        text: "个人  63992745",
        link: "",
      },
    ],
  },
];

const sidebar = [
  {
    text: "指南",
    items: [
      { text: "介绍", link: "/guide/introduction" },
      { text: "项目结构", link: "/guide/directory" },
    ],
  },
  {
    text: "本地依赖库",
    collapsible: true,
    items: getPackagesIntro(),
  },
];

function getPackagesIntro() {
  return [
    "vbenComponent",
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
  base: "/vben3-doc",
  repo: "jinmao88/vben3-doc",
  ignoreDeadLinks: true,
  lastUpdated: true,
  outDir: "../public",
  themeConfig: {
    logo: "/asset/logo.png",
    nav,
    sidebar,
    socialLinks: [
      { icon: "github", link: "https://github.com/jinmao88/vben3" },
    ],
    editLink: {
      pattern: "https://github.com/vbenjs/vben3-doc/edit/master/docs/:path",
      text: "编辑此页",
    },
  },
};
