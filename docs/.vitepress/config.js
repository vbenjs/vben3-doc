export default {
  title: "Vben Admin 3",
  description: "Vben Admin 3 Doc",
  repo: "jinmao88/vben3-doc",
  ignoreDeadLinks: true,
  lastUpdated: true,
  outDir: "../public",
  themeConfig: {
    logo: "/asset/logo.png",
    nav: [
      {
        text: "指南",
        items: [
          { text: "介绍", link: "/guide/introduction" },
          { text: "项目结构", link: "/guide/directory" },
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
          },
          {
            text: "个人  63992745",
          },
        ],
      },
    ],
    sidebar: [
      {
        text: "指南",
        items: [
          { text: "介绍", link: "/guide/introduction" },
          { text: "项目结构", link: "/guide/directory" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/jinmao88/vben3" },
    ],
    editLink: {
      pattern: "https://github.com/jinmao88/vben3-doc/edit/master/docs/:path",
      text: "编辑此页",
    },
  },
};
