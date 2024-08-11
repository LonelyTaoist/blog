module.exports = {
    title: '济沧浪',
    description: 'LonelyTaoist的个人博客',
    head: [
        ['link', { rel: 'icon', href: 'https://blog-web-image.oss-cn-shanghai.aliyuncs.com/genshin/keli1.png' }],
        ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css' }],                          // 让md支持数学公式
        ['link', { rel: "stylesheet", href: 'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css' }]  // 让md支持数学公式
    ],
    // 让md支持数学公式
    markdown: {
        extendMarkdown: md => {
            md.use(require('markdown-it-katex'))
        }
    },
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
                    { text: '设计模式', link: '/computer/DesignPatterns/1/' },
                    { text: 'CUDA', link: '/computer/CUDA/1/' },
                    { text: 'AI', link: '/computer/AI/1/' }
                ]
            },
            { text: '金融', link: '/finance/' },
        ],
        sidebar: 'structuring',
        // 默认外观模式
        defaultMode: 'light',

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

        // 大图首页
        bodyBgImg:
            // 'https://blog-web-image.oss-cn-shanghai.aliyuncs.com/genshin/shenlilinghua-long.png',
            'https://blog-web-image.oss-cn-shanghai.aliyuncs.com/genshin/fufu1.png',
        // 'https://blog-web-image.oss-cn-shanghai.aliyuncs.com/genshin/fufu2.png',
        // 你的图片路径(必须位于 public 下)，可以是 URL
        bodyBgImgOpacity: 1, // body 背景图透明度，选值 0 ~ 1.0, 默认0.5
        indexImg: {
            navColor: 2,    // 导航栏左侧名字、中间搜索框、右侧字体的颜色，1 是黑色，2 是白色。默认是 1
            switchNavColor: true,    // 页面移出大图片的位置后，navColor 是否变换，如由白色变黑色，黑色变白色。默认是 false
            // 因为本主题的默认背景色偏向白色，如果 navColor 是 2，建议需要开启(true)，否则白背景 + 白字体 = 看不见
            bgTimeColor: true,     // 是否开启图片的背景色随一天的不同时间而变化，并且开启时间窗口提示，默认是 false。时间分为四种：白天（原图）、黄昏（偏黄）、晚上（偏黑）、深夜（偏深黑）
            bgTimeColorArray: ['transparent', 'transparent', 'transparent', 'transparent'],// ['transparent', 'rgba(255, 148, 48, .2)', 'rgba(0, 0, 0, .3)', 'rgba(0, 0, 0, .5)'],   // 第一个是白天的颜色（默认原图），第二个是黄昏的颜色，第三个是晚上的颜色，第四个是深夜的颜色。bgTimeColor 为 true 生效。提示：如果不想要这个效果，但是又想要时间窗口提示效果，则改为 ['transparent', 'transparent', 'transparent', 'transparent']
            descFade: true,   // 是否开启图片中间描述的淡入效果，默认为 false
            //desc: ["Web前端技术博客，积跬步以至千里，致敬每个爱学习的你 —— 来自 Evan Xu", "故事由我书写，旅程由你见证，传奇由她聆听 —— 来自 Young Kbt", "这一生波澜壮阔或是不惊都没问题 —— 来自 Weibw"],  // 多个描述，如果填写则覆盖 config.js 的 description，不填写默认读取 config.js 的 description，descFade 为 true 生效
            descFontSize: '1.4rem',   // desc 的字体大小，默认 1.4rem。提示：原主题是 1.1rem
            descFadeInTime: 200,  // 描述的淡入效果持续时间，descFade 为 true 生效，默认 200 毫秒
            descFadeOutTime: 100,  // 描述的淡出效果持续时间，descFade 为 true 生效，默认 100 毫秒
            descNextTime: 800,  // 当存在多个 desc 时，一个 desc 展示完后或准备开始时，多少秒后出现下一个 desc，默认 800 毫秒
            bubble: false,    // 是否开启图片的气泡效果，默认为 false
            bubblePosition: 0,  // 气泡效果的位置，范围：0-100，不同数值代表不同的起始位置，0是整个图片，50是半张图（一半的下方）。bubble 为 true 生效。默认是 0
            bubbleNum: 200,   // 气泡的个数，bubble 为 true 生效，默认 200 个
        },
        //背景大图
        // bodyBgImg: [
        //     // 'https://blog-web-image.oss-cn-shanghai.aliyuncs.com/genshin/shenlilinghua-long.png',
        //     'https://blog-web-image.oss-cn-shanghai.aliyuncs.com/genshin/fufu1.png',
        //     // 'https://blog-web-image.oss-cn-shanghai.aliyuncs.com/genshin/fufu2.png',
        // ],
        // 多张背景图的切换时间
        // bodyBgImgInterval: 10,
        // bodyBgImgOpacity: 1, // body 背景图透明度，选值 0 ~ 1.0, 默认0.5

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
        ['vuepress-plugin-mathjax', {
            presets: 'safe',
        }],
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