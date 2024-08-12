export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/detail/index',
    'pages/auth/index'
  ],
  // tabBar: {
  //   list: [{
  //     pagePath: 'pages/index/index',
  //     iconPath: '',
  //     selectedIconPath: '',
  //     text: '首页'
  //   },{
  //     pagePath: 'pages/detail/index',
  //     iconPath: '',
  //     selectedIconPath: '',
  //     text: '详情页面'
  //   }],
  //   color: '#333'
  // },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
