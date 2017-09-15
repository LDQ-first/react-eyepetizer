import { createSelector } from 'reselect'

const selectGolbal = state => state.get('global')

export {
    selectGolbal
}
