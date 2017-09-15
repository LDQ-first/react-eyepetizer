import { createSelector } from 'reselect'
import {selectGolbal} from './index'

export const navSelector = createSelector(
    selectGolbal,
    appState => appState.get('nav')
)

export const openSelector = createSelector(
    navSelector,
    navState => navState.get('open')
)

