
import {INCREMENT, DECREMENT, RESET} from '../const/const'
import { fromJS } from 'immutable'

const initState = fromJS({
    count: 0
})

export default (state = initState, action) => {
    switch (action.type) {
        case INCREMENT:
            return state.update('count', count => count + 1)
        case DECREMENT:
            return state.update('count', count => count - 1)
        case RESET:
            return state.set('count', 0)
        default:
            return state
    }
}
