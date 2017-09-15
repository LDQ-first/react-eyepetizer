
const index = `https://bird.ioliu.cn/v2?url=http://baobab.kaiyanapp.com/api/v4/tabs/selected`

const related = id => `https://baobab.kaiyanapp.com/api/v1/video/related/${id}?num=10`

const replies = id => `https://baobab.kaiyanapp.com/api/v1/replies/video?id=${id}&num=10`

const detail = id => `https://baobab.kaiyanapp.com/api/v1/video/${id}`


export {
    index,
    related,
    replies,
    detail
}