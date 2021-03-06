# react-eyepetizer 

> React全家桶开发开源的开眼SPA    
> 实现了首页，发现，关注，搜索，热门，分类，作者，排行榜，往期精选，播放视频详情，查看评论, 查看作者详情等功能

> [预览地址](http://ldqblog.me/react-eyepetizer/dist/#/)


## 技术栈
* **React 15.6**: [ 前端框架 ]
* **Redux 3.7**: [ 状态管理,组件通信 ] 
* **React-router 4.2**: [ 配置路由，组件切换, 按需加载 ]
* **ES6/7**: [ JS版本 ]
* **Webpack**: [ 模块化处理，编译打包 ]
* **Material-UI**: [ UI框架 ]
* **Axios**: [ 基于Promise处理HTTP请求 ]
* **Classnames**: [ 处理类名 ]
* **Moment**: [ 处理时间显示 ]
* **Prop-types**: [ 组件的props中的变量进行类型检测 ]
* **Immutable**: [ Immutable数据化 ]
* **Reselect**: [ 使用缓存机制优化state ]
* **Styled-components**: [ CSS in JS ]
* **Redux-thunk&async/await**: [ redux中间件，处理异步事件 ]
* **LoaclStorge**: [ 本地存储相关数据 ]




## 源码

> [GitHub](https://github.com/LDQ-first/react-eyepetizer)


## 手机可访问二维码

![React版开眼](http://ldqblog.me/react-eyepetizer/static/img/QR/mobile.png)


## 效果图



<a href="http://ldqblog.me/react-eyepetizer/static/result/index.gif">index</a>

![index](http://ldqblog.me/react-eyepetizer/static/result/shortcut/index.jpg)



<a href="http://ldqblog.me/react-eyepetizer/static/result/hot.gif">hot</a>

![hot](http://ldqblog.me/react-eyepetizer/static/result/shortcut/hot.jpg)


<a href="http://ldqblog.me/react-eyepetizer/static/result/search.gif">search</a>

![search](http://ldqblog.me/react-eyepetizer/static/result/shortcut/search.jpg)



<a href="http://ldqblog.me/react-eyepetizer/static/result/detail.gif">detail</a>

![detail](http://ldqblog.me/react-eyepetizer/static/result/shortcut/detail.jpg)


> [更多效果图](https://github.com/LDQ-first/react-eyepetizer/tree/master/static/result)



## 项目结构

```javascript 

│  index.js
├─api
├─components
│  ├─App
│  │      
│  ├─AuthorCarousel
│  │      
│  ├─AuthorHorizontal
│  │      
│  ├─AuthorInfo
│  │      
│  ├─AuthorLeftInfo
│  │      
│  ├─AuthorSingle
│  │      
│  ├─AuthorVideoInfo
│  │      
│  ├─Carousel
│  │      
│  ├─Categorys
│  │      
│  ├─DatePicker
│  │      
│  ├─DetailFooter
│  │      
│  ├─Download
│  │      
│  ├─Footer
│  │      
│  ├─GoToFeed
│  │      
│  ├─GoToTop
│  │      
│  ├─Header
│  │      
│  ├─Hot
│  │      
│  ├─Loading
│  │      
│  ├─Navigation
│  │      
│  ├─Pgcas
│  │      
│  ├─RelatedVideo
│  │      
│  ├─ReplyLists
│  │      
│  ├─ReturnIndex
│  │      
│  ├─Search
│  │      
│  ├─showQRCode
│  │      
│  ├─Tabs
│  │      
│  ├─Tags
│  │      
│  ├─TopScreen
│  │      
│  ├─Video
│  │      
│  ├─VideoArea
│  │      
│  ├─VideoHorizontal
│  │      
│  ├─VideoImg
│  │      
│  ├─VideoInfo
│  │      
│  └─VideoLists
│          
├─redux
│  │  reducers.js
│  │  store.js
│  │  
│  ├─actions
│  │      
│  ├─const
│  │      
│  └─reducer
│          
├─router
│      
├─selector
│      
├─styled
│      
├─utils
│      
└─views
    ├─Author
    │      
    ├─Detail
    │      
    ├─Feed
    │      
    ├─Find
    │      
    ├─Follow
    │      
    ├─Home
    │      
    ├─NotFound
    │      
    ├─Ranklist
    │      
    └─SearchArea
            

```


