import { createSelector } from 'reselect'
import {selectGolbal} from './index'

export const testSelector = createSelector(
    selectGolbal,
    appState => appState.get('test')
)

export const isLoadingSelector = createSelector(
    testSelector,
    testState => testState.get('isLoading')
)

export const errorMsgSelector = createSelector(
    testSelector,
    testState => testState.get('errorMsg')
)

export const songSelector = createSelector(
    testSelector,
     testState =>  testState.get('song')
)


