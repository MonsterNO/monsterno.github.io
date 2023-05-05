module.exports = {
  title: 'lp-weapp',
  base: '/lp-weapp',
  description: 'lp-weapp微信小程序 UI 组件库',
  dest: 'dist',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  plugins: ['@vuepress/back-to-top'],
  themeConfig: {
    nav: [{ text: '文档', link: '/docs/' }],
    sidebar: [
      {
        title: '开发指南',
        collapsable: false,
        sidebarDepth: 0,
        children: ['/docs/']
      },
      {
        title: '基础组件',
        collapsable: false,
        sidebarDepth: 0,
        children: ['/docs/banner']
      }
    ]
  },
  extraWatchFiles: ['.vuepress/config/**'],
};
