
const index = `https://bird.ioliu.cn/v2?url=http://baobab.kaiyanapp.com/api/v4/tabs/selected`

const related = id => `https://baobab.kaiyanapp.com/api/v1/video/related/${id}?num=10`

const replies = id => `https://baobab.kaiyanapp.com/api/v1/replies/video?id=${id}&num=1000`

const detail = id => `https://baobab.kaiyanapp.com/api/v1/video/${id}`




const wechat = `//static.kaiyanapp.com/eyepetizer-web/assets/images/index/landing_wechat_account.53f45180.jpg`

const weibo = `http://weibo.com/eyepetizer`

const email = `mailto:bd@eyepetizer.net`


const contact = {
    wechat,
    weibo,
    email
}


const homePoster = `//static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_poster.43ddf261.jpg`
const homeVideo = `//static.kaiyanapp.com/eyepetizer-web/homepage.mp4`

const home = {
    homePoster,
    homeVideo
}


/*
<div class="image-list">
<img src="//static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_7.8b2d29b4.jpg"alt=""class="hide"> 
<img src="//static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_6.54b06aad.jpg"alt=""class="hide"> 
<img src="//static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_5.c48e7769.jpg"alt=""class="hide"> 
<img src="//static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_4.c268348d.jpg"alt=""class="hide"> 
<img src="//static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_3.7819585d.jpg"alt=""class="hide"> 
<img src="//static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_2.6b1727b7.jpg"alt=""class=""> 
<img src="//static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_1.9583a28a.jpg"alt=""class="hide">
</div>

*/


const imglists = [
    '//static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_7.8b2d29b4.jpg',
    '//static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_6.54b06aad.jpg',
    '//static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_5.c48e7769.jpg',
    '//static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_4.c268348d.jpg',
    '//static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_3.7819585d.jpg',
    '//static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_2.6b1727b7.jpg',
    '//static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_1.9583a28a.jpg'
]




export {
    index,
    related,
    replies,
    detail,
    contact,
    home,
    imglists
}