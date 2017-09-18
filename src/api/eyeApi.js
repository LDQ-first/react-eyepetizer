
const index = `https://bird.ioliu.cn/v2?url=http://baobab.kaiyanapp.com/api/v4/tabs/selected`

const related = id => `https://baobab.kaiyanapp.com/api/v1/video/related/${id}?num=10`

const replies = id => `https://baobab.kaiyanapp.com/api/v1/replies/video?id=${id}&num=100`

const detail = id => `https://baobab.kaiyanapp.com/api/v1/video/${id}`




const feed = (date, num) => `http://baobab.kaiyanapp.com/api/v1/feed?date=${date}&num=${num}`

const search = query => `http://baobab.kaiyanapp.com/api/v1/search?num=20&query=${query}`

const authorDetail = pgcId => `http://baobab.kaiyanapp.com/api/v3/pgc/videos?pgcId=${pgcId}&num=100`




const hot = `http://baobab.kaiyanapp.com/api/v4/discovery/hot`

const category = `http://baobab.kaiyanapp.com/api/v4/discovery/category`

const pgcs = `http://baobab.kaiyanapp.com/api/v4/pgcs/all`





const spriteShare = `//static.kaiyanapp.com/eyepetizer-web/assets/images/sprite_share.bc0f4494.png`

const wechat = `//static.kaiyanapp.com/eyepetizer-web/assets/images/index/landing_wechat_account.53f45180.jpg`

const weibo = `http://weibo.com/eyepetizer`

const email = `mailto:bd@eyepetizer.net`

const ios = `//static.kaiyanapp.com/eyepetizer-web/assets/images/index/landing_scan_qr_ios.e13aaceb.png`

const android = `//static.kaiyanapp.com/eyepetizer-web/assets/images/index/landing_scan_qr_android.8915ce9c.png`

const contact = {
    wechat,
    weibo,
    email,
    ios,
    android
}


const homePoster = `//static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_poster.43ddf261.jpg`
const homeVideo = `//static.kaiyanapp.com/eyepetizer-web/homepage.mp4`

const home = {
    homePoster,
    homeVideo
}



const imglists = [
    '//static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_7.8b2d29b4.jpg',
    '//static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_6.54b06aad.jpg',
    '//static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_5.c48e7769.jpg',
    '//static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_4.c268348d.jpg',
    '//static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_3.7819585d.jpg',
    '//static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_2.6b1727b7.jpg',
    '//static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_1.9583a28a.jpg'
]

const sprite = `//static.kaiyanapp.com/eyepetizer-web/assets/images/index/sprite-s93ca05f687.023a526d.png`

const author = `http://open.eyepetizer.net/#!/landing`



const playerBtn = `http://static.kaiyanapp.com/eyepetizer-web/assets/images/detail/icon_play@2x.3b9f9ba5.png`


const logoLaunch = `//static.kaiyanapp.com/eyepetizer-web/assets/images/detail/logo_launch@3x.ff359b72.png`
const btnLaunch = `//static.kaiyanapp.com/eyepetizer-web/assets/images/detail/btn_launch@3x.950ac618.png`

const appLink = `https://lkme.cc/3rC/mfeBTCBn9`

const iconLike = `//static.kaiyanapp.com/eyepetizer-web/assets/images/detail/icon_like_grey@3x.d2a2a2a8.png`


const bottomLogo = `//static.kaiyanapp.com/eyepetizer-web/assets/images/detail/bottom_logo@3x.556cae6b.png`

const eyepetizerWxQr = `//static.kaiyanapp.com/eyepetizer-web/assets/images/eyepetizer-wx-qr.243f15a2.png`


export {
    index,
    related,
    replies,
    detail,
    contact,
    home,
    imglists,
    sprite,
    author,
    playerBtn,
    logoLaunch,
    btnLaunch,
    appLink,
    iconLike,
    bottomLogo,
    eyepetizerWxQr,
    spriteShare
}