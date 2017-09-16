
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


export {
    index,
    related,
    replies,
    detail,
    contact
}