// nav_zh
module.exports = [
  { text: '主页', link: '/' },
  {
    text: '简介',
    link: '/intro/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      { text: '知识储备', link: '/intro/knowledge/',
        items: [
          { text: '线性代数', link: '/intro/knowledge/linear-algebra/' },
          { text: '概率和数理统计', link: '/intro/knowledge/probability-statistics/' },
          { text: '统计学习算法', link: '/intro/knowledge/statistical-learning-algorithms/' },
          { text: '机器学习算法', link: '/intro/knowledge/machine-learning-algorithms/' },
          { text: '深度学习算法', link: '/intro/knowledge/deep-learning-algorithms/' },
        ],
      }
    ]
  },
  { text: '开源框架',
    link: '/framework/',
    items: [
      { text: 'Pytorch', link: '/framework/pytorch/' },
      { text: 'Mxnet', link: '/framework/mxnet/' },
      { text: 'Tensorflow', link: '/framework/tensorflow/' },
      { text: 'Darknet', link: '/framework/darknet/' },
    ],
  },
  {
    text: '网络模型',
    link: '/model/',
    items: [
      { text: '识别分类', link: '/model/classification/9a7ee40fc232253e/' },
      { text: '行为判断', link: '/model/analysis/4c778760be26d8b3/' },
      { text: '3D重建', link: '/model/3d/117708e0af7f0bd9/' },
      { text: '其它模型', link: '/model/other/pages/41f87d890d0a02af/' },
      { text: '模型迁移', link: '/model/other/pages/41f87d890d0a02af/' },
    ],
  },
  {
    text: '前沿科技',
    link: '/innovation/',
    items: [
      { text: '学术论文', link: '/pages/8309a5b876fc95e3/' },
      { text: '前沿应用', link: '/pages/0a83b083bdf257cb/' },
    ],
  },
  {
    text: '更多',
    link: '/more/',
    items: [
      { text: '学习', link: '/pages/f2a556/' },
      { text: '编程', link: '/pages/aea6571b7a8bae86/' },
      { text: '应用', link: '/pages/2d615df9a36a98ed/' },
      { text: '实用技巧', link: '/pages/baaa02/' },
      { text: '友情链接', link: '/friends/' },
    ],
  },
  { text: '关于', link: '/about/' }
]
