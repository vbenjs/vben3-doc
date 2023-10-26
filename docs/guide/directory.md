# 目录结构
+ root
    + apps 
        + admin `主目录`
           + mock `mock相关`
           + public `公共资源`
           + src 
                + apis `请求api配置`
                + assets `静态资源`
                + layout `布局层，主要依赖于packages/layouts[可重载]`
                + pages `页面，自己写`
                + router `路由定义`
                + store `状态管理`
                + setting `项目配置`
                + main.ts `入口`
                + init-application.ts `本地依赖初始化以及注入`
           + .env `环境配置` 
           + .env.development `开发环境配置` 
           + .env.production `生产环境配置`
           + init-components.ts `vbenComponent初始化，组件注册`
    + packages `本地依赖库`
        + constants `静态参数，枚举等`
        + demo `演示代码[可删除]`
        + directives `指令集`
        + hooks `hooks`
        + layouts `框架布局`
        + locale `多语言`
        + request `请求依赖，默认axios`
        + styles `样式`
        + types `类型定义`
        + use `常用函数复用集合，vueuse+其他`
        + utils `工具函数集`
        + vbenComponents `通用组件封装[不限定组件库]，选用`
    + scripts `项目脚本相关`
    + configs `项目配置相关`
    + pnpm-workspace.yaml `本地依赖库配置`
    + 

欢迎提PR
