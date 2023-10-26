# 项目结构

```
|-- apps
|   |-- admin
|   |   |-- mock                        # mock 数据
|   |   |-- public                      # 公共资源
|   |   |-- src
|   |   |   |-- apis                    # 请求api配置
|   |   |   |-- assets                  # 静态资源
|   |   |   |-- hooks
|   |   |   |-- layout                  # 布局层，主要依赖于packages/layouts[可重载]
|   |   |   |-- pages                   # 页面，自己写
|   |   |   |-- router                  # 路由定义
|   |   |   |-- setting                 # 项目配置
|   |   |   |-- store                   # 状态管理
|   |   |   |-- main.ts                 # 入口
|   |   |   |-- init-application.ts     # 本地依赖初始化以及注入
|   |   |-- .env                        # 环境配置
|   |   |-- .env.development            # 开发环境配置
|   |   |-- .env.production             # 生产环境配置
|   |   |-- init-components.ts          # vbenComponent初始化，组件注册
|-- configs                             # 项目配置相关
|   |-- css-preprocess
|   |-- lint                            # code lint 配置
|   |-- tsconfig                        # ts 配置
|   |-- vite                            # vite 配置
|-- packages                            # 本地依赖库
|   |-- components                      # 组件
|   |-- constants                       # 静态参数，枚举等
|   |-- demo                            # 演示代码[可删除]
|   |-- directives                      # 指令集
|   |-- grid-layouts                    # 
|   |-- hooks                           # hooks
|   |-- layouts                         # 框架布局
|   |-- locale                          # 多语言
|   |-- request                         # 请求依赖，默认axios
|   |-- router                          #
|   |-- stores                          # 登录数据保存
|   |-- styles                          # 样式
|   |-- types                           # 类型定义
|   |-- utils                           # 工具函数集
|   |-- vbenComponents
|-- scripts                             # 项目脚本相关
```

## apps

此目录一般为我们自己开发的业务模块，例如本项目的 `apps/admin` 模块，该模块有着本系统的核心代码。如果后续有不同的业务，可以在该目录中添加新的模块，统一管理。

:::tip
如果你是一个有微服务经验的开发者，尤其是了解后端的，这很好理解😘
:::

## configs

该目录中放置项目的配置文件，例如 ts、vite、lint、css 等相关配置。

## packages

该目录中存放业务模块中使用的库，通常我们称之为 **本地依赖库**，这些依赖库或在第三方库的基础上进行再封装（request），或全部由自己开发（[secret示例](/guide/config.html#关于-pnpm-workspace-yaml)），或两者混合而成（utils）。不论如何，这样的结构提高了这些代码复用，虽然目录层级什么的多了很多，但是项目一旦大起来，这是必然发生的。只要理清了脉络，很简单，不是么✌️
