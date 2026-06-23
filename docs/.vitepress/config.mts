import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'AI 绘画入门知识库',
  description: '面向零基础用户的 AI 绘画概念、模型、Prompt、LoRA 与工作流入门资料',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.svg',
    search: {
      provider: 'local'
    },
    nav: [
      { text: '入门', link: '/guide/getting-started' },
      { text: '概念', link: '/concepts/base-model' },
      { text: '模型', link: '/models/ecosystems' },
      { text: 'LoRA', link: '/lora/basics' },
      { text: '资源', link: '/resources/websites' }
    ],
    sidebar: [
      {
        text: '开始',
        items: [
          { text: '首页', link: '/' },
          { text: '入门路线', link: '/guide/getting-started' }
        ]
      },
      {
        text: '核心概念',
        items: [
          { text: '底模是什么', link: '/concepts/base-model' },
          { text: 'AI 绘画由哪些部分组成', link: '/concepts/components' },
          { text: '基本原理', link: '/concepts/how-it-works' }
        ]
      },
      {
        text: '模型与生态',
        items: [
          { text: '常见模型生态', link: '/models/ecosystems' }
        ]
      },
      {
        text: '提示词与 LoRA',
        items: [
          { text: 'Prompt 入门', link: '/prompting/basics' },
          { text: 'LoRA 入门', link: '/lora/basics' }
        ]
      },
      {
        text: '工具与工作流',
        items: [
          { text: '常用工具', link: '/tools/common-tools' },
          { text: '工作流和模板区别', link: '/workflows/workflow-vs-template' }
        ]
      },
      {
        text: '资料',
        items: [
          { text: '常用网站', link: '/resources/websites' },
          { text: '术语表', link: '/glossary' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/comfyanonymous/ComfyUI' }
    ],
    footer: {
      message: '面向公开发布的 AI 绘画入门资料。请遵守模型、素材与平台许可。',
      copyright: 'Copyright © 2026'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    lastUpdated: {
      text: '最后更新'
    },
    outline: {
      label: '本页目录'
    }
  }
})
