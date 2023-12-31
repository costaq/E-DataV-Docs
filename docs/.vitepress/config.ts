/*
 * @Autor: costa
 * @Date: 2023-07-31 10:13:12
 * @LastEditors: costa
 * @LastEditTime: 2023-11-23 11:10:41
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "E-DataV",
  description: "DataV Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '入门', link: '/introduction' }
    ],

    sidebar: [
      {
        text: '入门',
        items: [
          { text: '介绍', link: '/introduction' }
        ]
      },
      {
        text: '使用',
        items: [
          { text: '边框', link: '/borderBox' },
          { text: '全屏组件', link: '/fullScreenContainer' },
          { text: '数字翻牌器', link: '/digitalFlop' },
          { text: 'Tab', link: '/tab' },
          { text: '水位图', link: '/waterLevelPond' },
          { text: '排名轮播图', link: '/scrollRankingBoard' },
          { text: '动态文字', link: '/dynamicText' },
          { text: 'Loading加载', link: '/loading' },
          { text: '仪表盘', link: '/gaugeChart' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/costaq/E-DataV-Vue3' }
    ]
  }
})
