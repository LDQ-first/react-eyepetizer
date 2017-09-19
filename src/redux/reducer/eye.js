

import {
    GET_INDEX, 
    GET_RELATED, 
    GET_REPLIES,
    GET_DETAIL,
    GET_AUTHOR,
    GET_SEARCH,
    GET_FEED,

    GET_HOT,
    GET_CATEGORY,
    GET_PGCA,

    GET_WEEK,
    GET_MONTH,
    GET_ALL,
    
    GET_FOLLOW,
} from '../const/const'

import { fromJS } from 'immutable'

const initState = fromJS({
    IndexData: {
        itemList: [],
        date: 0,
    },
    videoLists: [],
    replyLists: [],
    details: {},
    authors: {},
    searchLists: {},
    feeds: {},
    hots: {},
    categorys: {},
    pgcas: {},
    weeks: [],
    months: [],
    alls: [],
    follow: {},
})

export default (state = initState, action) => {
    switch (action.type) {
        case GET_INDEX:
            return state.set('IndexData', action.IndexData)
        case GET_RELATED:
            return state.set('videoLists', action.videoList)
        case GET_REPLIES:
            return state.set('replyLists', action.replyList)
        case GET_DETAIL:
            return state.set('details', action.detail)
        case GET_AUTHOR:
            return state.set('authors', action.author)
        case GET_SEARCH:
            return state.set('searchLists', action.searchList)
        case GET_FEED:
            return state.set('feeds', action.feed)

        case GET_HOT:
            return state.set('hots', action.hot)
        case GET_CATEGORY:
            return state.set('categorys', action.category)
        case GET_PGCA:
            return state.set('pgcas', action.pgca)
        case GET_WEEK:
            return state.set('weeks', action.week)
        case GET_MONTH:
            return state.set('months', action.month)
        case GET_ALL:
            return state.set('alls', action.all)
        case GET_FOLLOW:
            return state.set('follows', action.follow)
    
        default:
            return state
    }
}
