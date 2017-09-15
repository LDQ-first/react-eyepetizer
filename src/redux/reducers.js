import { combineReducers } from 'redux-immutable'
import nav from './reducer/nav'
import counter from './reducer/counter'
import test from './reducer/test'
import { LOCATION_CHANGE } from 'react-router-redux'
import { fromJS } from 'immutable'

const routeInitialState = fromJS({
  locationBeforeTransitions: null
})
/**
 * Merge route into the global application state
 */
const routeReducer = (state = routeInitialState, action) => {
  switch (action.type) {
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload
      })
    default:
      return state
  }
}


export default combineReducers({
    route: routeReducer,
    global: combineReducers({
      nav,
      test,
      counter
    })
})

