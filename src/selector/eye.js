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


export const videoListSelector = createSelector(
    eyeSelector,
    eyeState => {
        if(!eyeState) return
        return eyeState.get('videoList')
    }
)


export const replyListSelector = createSelector(
    eyeSelector,
    eyeState => {
        if(!eyeState) return
        return eyeState.get('replyList')
    }
)

export const detailSelector = createSelector(
    eyeSelector,
    eyeState => {
        if(!eyeState) return
        return eyeState.get('detail')
    }
)

