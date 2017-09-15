import {
    TOGGLE_MENU
} from '../const/const'
import { fromJS } from 'immutable'



const initSate = fromJS({
    open: false
})

export default (state = initSate, action) => {
    switch(action.type) {
        case TOGGLE_MENU:
            return state.update('open', open => !open)
        default:
            return state
    }
}