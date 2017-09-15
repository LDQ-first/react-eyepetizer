import { createSelector } from 'reselect'
import {selectGolbal} from './index'


export const eyeSelector = createSelector(
    selectGolbal,
    appState => appState.get('eye')
)

export const IndexDataSelector = createSelector(
    eyeSelector,
    eyeState => eyeState.get('IndexData')
)