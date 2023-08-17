import DefaultTheme from 'vitepress/theme'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import { useComponents } from './useComponents'
import './style.css';
// 演示组件
import XButton from "@xui/components/button";
import "@xui/theme-chalk/src/index.scss";


export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    useComponents(ctx.app)
    // 全局注册基础组件
    ctx.app.component('XButton', XButton)
  }
}
