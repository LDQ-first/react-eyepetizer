import { createSelector } from 'reselect'
import {selectGolbal} from './index'


export const counterSelector = createSelector(
    selectGolbal,
    appState => appState.get('counter')
)

export const countSelector = createSelector(
    counterSelector,
    counterState => counterState.get('count')
)


