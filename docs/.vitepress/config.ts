import { defineConfig } from 'vitepress'
import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock'

export default defineConfig({
  title: 'XUI基础组件文档',
  description: '一个模仿 ElementUI 的 Vue3 组件库',
  lang: 'cn-ZH',
  head: [
    ['link', { rel: 'icon', href: 'logo.svg' }]
  ],
  lastUpdated: true,
  themeConfig: {
    outlineTitle: '本页目录',
    lastUpdatedText: '上次更新',
    logo: 'logo.svg',
    siteTitle: 'XUI基础组件文档',
    search: {
      provider: 'local',
    },
    outline: 3,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/cloudhao1999/xui' }
    ],
    nav:[
      {
        text: '安装指南',
        link: '/components/'
      },
      { text: '基础组件', link: '/components/XButton/base.md' },
      {
        text: 'GitHub地址',
        link: 'https://github.com/cloudhao1999/xui'
      },
      {
        text: '博客',
        items: [
          { text: '干巴爹兔', link: 'https://cloudhao.top' },
          { text: 'B 站', link: 'https://space.bilibili.com/28615318?spm_id_from=..0.0' }
        ]
      }
    ],
    sidebar:{
      '/components': [
        {
          text: '常用组件',
          items: [
            { text: '按钮组件', link: '/components/XButton/base.md' },
          ]
        },
      ]
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present 干巴爹兔'
    }
  },
  markdown: {
    config(md) {
      md.use(demoblockPlugin, {
        customClass: 'demoblock-custom'
      })
    }
  },
  vite: {
    plugins: [demoblockVitePlugin()]
  },
})
