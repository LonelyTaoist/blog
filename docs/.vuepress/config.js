module.exports = {
    title: '济沧浪',
    description: 'LonelyTaoist的个人博客',
    head: [
        ['link', { rel: 'icon', href: 'https://blog-web-image.oss-cn-shanghai.aliyuncs.com/genshin/keli1.png' }]
    ],
    theme: 'vdoing',
    themeConfig: {
        logo: 'https://blog-web-image.oss-cn-shanghai.aliyuncs.com/genshin/keli1.png',
        lastUpdated: false, // string | boolean
        locales: {
            '/': {
                lang: 'zh-CN'
            }
        },
        nav: [
            { text: '首页', link: '/' },
            {
                text: '计算机', link: '/computer/', items: [
                    { text: 'Git', link: '/computer/Git/1/' },
                    { text: 'Linux', link: '/computer/Linux/99/' },
                    { text: 'C++', link: '/computer/C++/99/' },
                    { text: '设计模式', link: '/computer/DesignPatterns/1/' }
                ]
            },
            { text: '金融', link: '/finance/' },
        ],
        sidebar: 'structuring',
        // 默认外观模式
        defaultMode: 'read',
        
        footer: {
            createYear: 2023,
            copyrightInfo: `<a href='http://beian.miit.gov.cn/'>苏ICP备2023014117号-1</a>
            <img src='/beian.png'>
            <a href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32011502011853'>苏公网安备 32011502011853号</a>`
        },

        // 博主信息，显示在首页侧边栏
        blogger: {
            avatar: 'https://blog-web-image.oss-cn-shanghai.aliyuncs.com/star_rail/jingliu2.png',  //头像
            name: 'LonelyTaoist',
            slogan: '道可道非常道 名可名非常名' // 个性签名
        },

        //背景大图
        bodyBgImg: [
            // 'https://blog-web-image.oss-cn-shanghai.aliyuncs.com/genshin/shenlilinghua-long.png',
            'https://blog-web-image.oss-cn-shanghai.aliyuncs.com/genshin/fufu1.png',
            // 'https://blog-web-image.oss-cn-shanghai.aliyuncs.com/genshin/fufu2.png',
        ],
        // 多张背景图的切换时间
        // bodyBgImgInterval: 10,
        bodyBgImgOpacity: 1, // body 背景图透明度，选值 0 ~ 1.0, 默认0.5

        social: {
            // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
            icons: [
                {
                    iconClass: "icon-youjian",
                    title: "邮件",
                    link: "mailto:lonelytaoist@qq.com",
                },
                {
                    iconClass: "icon-github",
                    title: "GitHub",
                    link: "https://github.com/LonelyTaoist",
                },
                {
                    iconClass: "icon-csdn",
                    title: "CSDN",
                    link: "https://blog.csdn.net/u011871449",
                },
            ],
        },
    },

    plugins: [
        // 阅读进度条
        'reading-progress',

        // 复制代码块的插件
        ['vuepress-plugin-code-copy', true],

        // 自动推送百度
        ['vuepress-plugin-baidu-autopush', true],

        // 光标特效
        [
            'cursor-effects', {
                size: 2, // size of the particle, default: 2
                shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
                zIndex: 999999999, // z-index property of the canvas, default: 999999999
            }
        ],

        // 网站动态标题
        ['dynamic-title', {
            // showIcon: '',
            showText: '欢迎光临~~',
            // hideIcon: '',
            hideText: 'LonelyTaoist^_^',
            recoverTime: 2000,
        }],

        // 站点地图文件，用于robots.txt
        ['sitemap', { hostname: 'https://www.lonelytaoist.com' }],

        // 自动生成meta标签及其内容
        [
            'autometa', {
                site: {
                    name: 'lonelytaoist'
                },
                canonical_base: 'https://www.lonelytaoist.com',
            },
        ],

        // rss订阅
        [
            'feed',
            {
                canonical_base: 'https://www.lonelytaoist.com',
                count: 5000,
            }
        ],

        // live2d看板娘
        [
            'vuepress-plugin-helper-live2d', {
                // 是否开启控制台日志打印(default: false)
                log: false,
                live2d: {
                    // 是否启用(关闭请设置为false)(default: true)
                    enable: true,
                    // 模型名称(default: hibiki)>>>取值请参考：
                    // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
                    model: 'haru/01',
                    display: {
                        position: "left", // 显示位置：left/right(default: 'right')
                        width: 135, // 模型的长度(default: 135)
                        height: 300, // 模型的高度(default: 300)
                        hOffset: 65, //  水平偏移(default: 65)
                        vOffset: 0, //  垂直偏移(default: 0)
                    },
                    mobile: {
                        show: false // 是否在移动设备上显示(default: false)
                    },
                    react: {
                        opacity: 1 // 模型透明度(default: 0.8)
                    }
                }
            }
        ]

    ]

}