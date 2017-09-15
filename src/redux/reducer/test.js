import {
    GET_SONG_REQUEST,
    GET_SONG_SUCCESS,
    GET_SONG_FAIL
} from '../const/const'
import { fromJS, Map } from 'immutable'


const initState = fromJS({
    status: 0,
    isLoading: false,
    song: {},
    errorMsg: ''
})

export default (state = initState, action) => {
    switch(action.type) {
        case GET_SONG_REQUEST:
            return state.set('isLoading', true)
        case GET_SONG_SUCCESS:
            return (state = fromJS({
                ...state,
                status: 200,
                isLoading: false,
                song: action.song
            }))
        case GET_SONG_FAIL:
            return (state = fromJS({
                ...state,
                status: 404,
                errorMsg: '请求的歌不存在'
            }))
        default: 
             return state
    }
}