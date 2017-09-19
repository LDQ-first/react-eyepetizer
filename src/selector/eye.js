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


export const authorsSelector = createSelector(
    eyeSelector,
    eyeState => {
        if(!eyeState) return
        return eyeState.get('authors')
    }
)

export const searchListsSelector = createSelector(
    eyeSelector,
    eyeState => {
        if(!eyeState) return
        return eyeState.get('searchLists')
    }
)

export const feedsSelector = createSelector(
    eyeSelector,
    eyeState => {
        if(!eyeState) return
        return eyeState.get('feeds')
    }
)


export const hotsSelector = createSelector(
    eyeSelector,
    eyeState => {
        if(!eyeState) return
        return eyeState.get('hots')
    }
)


export const categorysSelector = createSelector(
    eyeSelector,
    eyeState => {
        if(!eyeState) return
        return eyeState.get('categorys')
    }
)


export const pgcasSelector = createSelector(
    eyeSelector,
    eyeState => {
        if(!eyeState) return
        return eyeState.get('pgcas')
    }
)


export const weeksSelector = createSelector(
    eyeSelector,
    eyeState => {
        if(!eyeState) return
        return eyeState.get('weeks')
    }
)


export const monthsSelector = createSelector(
    eyeSelector,
    eyeState => {
        if(!eyeState) return
        return eyeState.get('months')
    }
)

export const allsSelector = createSelector(
    eyeSelector,
    eyeState => {
        if(!eyeState) return
        return eyeState.get('alls')
    }
)


export const followsSelector = createSelector(
    eyeSelector,
    eyeState => {
        if(!eyeState) return
        return eyeState.get('follows')
    }
)



