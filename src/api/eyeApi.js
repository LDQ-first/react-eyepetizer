
const index = `https://bird.ioliu.cn/v2?url=http://baobab.kaiyanapp.com/api/v4/tabs/selected`

const related = id => `https://baobab.kaiyanapp.com/api/v1/video/related/${id}?num=10`

const replies = id => `https://baobab.kaiyanapp.com/api/v1/replies/video?id=${id}&num=1000`

const detail = id => `https://baobab.kaiyanapp.com/api/v1/video/${id}`




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

const detailBg = `http://img.kaiyanapp.com/a55bf0a3e95f8ac1f935459618ed7d94.jpeg?imageMogr2/quality/60/format/jpg`


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
    detailBg
}