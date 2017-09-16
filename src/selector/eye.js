import { createSelector } from 'reselect'
import {selectGolbal} from './index'


export const eyeSelector = createSelector(
    selectGolbal,
    appState => appState.get('eye')
)

export const IndexDataSelector = createSelector(
    eyeSelector,
    eyeState => {
        if(!eyeState) return
        return eyeState.get('IndexData')
    }
)



export const videoListsSelector = createSelector(
    eyeSelector,
    eyeState => {
        if(!eyeState) return
        return eyeState.get('videoLists')
    }
)



export const replyListsSelector = createSelector(
    eyeSelector,
    eyeState => {
        if(!eyeState) return
        return eyeState.get('replyLists')
    }
)




export const detailsSelector = createSelector(
    eyeSelector,
    eyeState => {
        if(!eyeState) return
        return eyeState.get('details')
    }
)
