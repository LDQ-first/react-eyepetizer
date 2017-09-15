

import {
    GET_INDEX, 
    GET_RELATED, 
    GET_REPLIES,
    GET_DETAIL
} from '../const/const'

import { fromJS } from 'immutable'

const initState = fromJS({
    IndexData: {
        itemList: [],
        date: 0,
    },
    videoList: [],
    replyList: []
})

export default (state = initState, action) => {
    switch (action.type) {
        case GET_INDEX:
            return state.set('IndexData', action.IndexData)
        case GET_RELATED:
            return 
        case GET_REPLIES:
            return 
        case GET_DETAIL:
            return 
        default:
            return state
    }
}
