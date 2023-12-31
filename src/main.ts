import { createApp } from "vue";
import XButton from "@xui/components/button";
import "@xui/theme-chalk/src/index.scss";
import "./style.css";
import App from "./App.vue";

// 注册组件
const app = createApp(App);
app.component("x-button", XButton);
app.mount("#app");
