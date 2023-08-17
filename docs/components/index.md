### 快速上手

::: tip 提示

@xui/components 基于 Vue3 + Typescript + Element-plus 再次封装的基础组件

:::

### 安装

```bash
npm install @xui/components -S
&
pnpm add @xui/components -S
```


### 使用

```js
// main.ts
import { createApp } from "vue";
import XButton from "@xui/components/button";
import "@xui/theme-chalk/src/index.scss";
import "./style.css";
import App from "./App.vue";

// 注册组件
const app = createApp(App);
app.component("x-button", XButton);
app.mount("#app");

```


### docs文档结构目录
```bash
├─ examples               # VPDemo组件自动解析此文件夹下的所有.vue文件
├─ components             # .md文件
├─ public                 # 静态资源文件
├─ .vitepress
│  ├─ config              # 插件配置
|  │  ├─ global.ts        # 全局变量定义
|  │  └─ plugins.ts       # 自定义.md文件渲染
│  ├─ theme               # 主题配置
│  ├─ utils               # 文档展开隐藏代码高亮
│  ├─ vitepress
|  │  ├─ vp-demo          # 组件源码
|  │  ├─ style            # 组件样式
|  │  └─ index.ts         # 暴露组件
│  └─ config.ts           # vitepress配置文件
├─ index.md               # 文档home页面
├─ tsconfig.json          # typescript 全局配置
└─ vite.config.ts         # vite 全局配置文件（支持tsx）
```
