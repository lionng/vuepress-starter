module.exports = {
    // port: '8095',  //项目端口
    base: '/vuepress-starter/',
    // dest: 'public',  //指定 vuepress build 的输出目录 默认：docs/.vuepress/dist/
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
            title: 'VuePress',
            description: 'Vue-powered Static Site Generator'
        },
        '/zh/': {
            lang: 'zh-CN',
            title: 'VuePress',
            description: 'Vue 驱动的静态网站生成器'
        }
    },
    themeConfig: {
        smoothScroll: true,  //页面滚动
        sidebar: 'auto',  //侧边栏 自动生成
        logo: '/assets/img/logo.png',  //logo
        locales: {  //多语言
            '/': {
                lastUpdated: 'Last Updated', // string | boolean
                selectText: 'Languages',
                label: 'English',
                ariaLabel: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                algolia: {},
                nav: [
                    {text: 'Google', link: 'https://www.google.com/', target: '_self', rel: ''},
                    {text: 'Google Translate', link: 'https://translate.google.cn/', target: '_self', rel: ''}
                    // {text: 'Nested', link: '/nested/', ariaLabel: 'Nested'}
                ],
                // sidebar: 'auto',
                // {
                '/': [/* ... */],
                // '/nested/': [/* ... */]
                // }
            },
            '/zh/': {
                lastUpdated: '上次更新', // string | boolean
                // 多语言下拉菜单的标题
                selectText: '选择语言',
                // 该语言在下拉菜单中的标签
                label: '简体中文',
                // 编辑链接文字
                editLinkText: '在 GitHub 上编辑此页',
                // Service Worker 的配置
                serviceWorker: {
                    updatePopup: {
                        message: "发现新内容可用.",
                        buttonText: "刷新"
                    }
                },
                // 当前 locale 的 algolia docsearch 选项
                algolia: {},
                nav: [
                    {text: '工作', link: '/zh/work/'},
                    {text: '基础', link: '/zh/base/'}
                ],
                // sidebar: 'auto',
                // {
                // '/zh/': [/* ... */],
                // '/zh/work/': [/* ... */]
                // }
            }
        }
    }
}