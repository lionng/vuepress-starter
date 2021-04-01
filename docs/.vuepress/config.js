module.exports = {
    head: [
        ['link', {rel: 'icon', href: '/assets/img/logo.png'}],
        ['link', {rel: 'manifest', href: '/manifest.json'}],  //https://developer.mozilla.org/zh-CN/docs/Web/Manifest
        ['meta', {name: 'theme-color', content: '#3eaf7c'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
        ['link', {rel: 'apple-touch-icon', href: '/assets/img/logo.png'}],
        ['link', {rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c'}],
        ['meta', {name: 'msapplication-TileImage', content: '/assets/img/logo.png'}],
        ['meta', {name: 'msapplication-TileColor', content: '#000000'}]
    ],
    markdown: {
        lineNumbers: true
    },
    // algolia: {
    //     apiKey: '<API_KEY>',
    //     indexName: '<INDEX_NAME>'
    // },
    //插件  https://vuepress.vuejs.org/zh/plugin/
    plugins: ['@vuepress/pwa', '@vuepress/back-to-top', '@vuepress/nprogress'],
    port: '8095',  //项目端口
    //如果你打算将你的网站部署到 https://foo.github.io/bar/，那么 base 的值就应该被设置为 "/bar/"
    // base: '/vuepress-starter/',
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
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        // repo: 'lionng/vuepress-starter',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        // repoLabel: '查看源码',
        // 以下为可选的编辑链接选项
        // docsDir: 'docs',
        // 默认是 false, 设置为 true 来启用
        // editLinks: true,
        // 默认为 "Edit this page"
        // editLinkText: '帮助我们改善此页面！',

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
                // algolia: {},
                nav: [
                    // {text: 'Google', link: 'https://www.google.com/', target: '_self', rel: ''},
                    // {text: 'Google Translate', link: 'https://translate.google.cn/', target: '_self', rel: ''}
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
                // algolia: {},
                nav: [
                    // {text: 'VuePress官网', link: 'https://vuepress.vuejs.org/zh/'},
                    // {text: '指南', link: '/zh/guide/'},
                    // {text: '基础', link: '/zh/base/'},
                    {text: '工作', link: '/zh/work/fire/'}
                    // {
                    //     text: '了解更多',
                    //     items: [
                    //         {text: 'hugo博客', link: 'https://lionng.github.io/'},
                    //         {text: 'csdn博客', link: 'https://blog.csdn.net/zhang__liuchen'},
                    //         {text: 'VuePress官网', link: 'https://vuepress.vuejs.org/zh/'},
                    //     ]
                    // }
                ],
                sidebar: {
                    '/zh/guide/': [
                        '',
                        'two',
                        'three'
                    ],
                    '/zh/work/fire/': [
                        'zj_develop',
                        'gd_develop',
                        'projectBug',
                        'docking',
                    ]
                }
                // {
                // '/zh/': [/* ... */],
                // '/zh/work/': [/* ... */]
                // }
            }
        }
    }
}