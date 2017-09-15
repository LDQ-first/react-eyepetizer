import {createStore, applyMiddleware, compose} from 'redux'
import reducers from './reducers.js'
import thunkMiddleware  from 'redux-thunk'
import createLogger from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
import { fromJS } from 'immutable'


export default (inititalState = {}) => {
    const middleware = [thunkMiddleware, routerMiddleware()]

    const composeEnhancers = 
        process.env.NODE_ENV !== 'production' &&
            typeof window === 'object' &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
                }) 
            : compose

    const enhancers =  composeEnhancers(
        applyMiddleware(...middleware)
    )

    const store = createStore(
        reducers,
        fromJS(inititalState),
        enhancers
    )

    return store
}

/*const middleware = [thunkMiddleware, createLogger]

    const composeEnhancers = 
        process.env.NODE_ENV !== 'production' &&
            typeof window === 'object' &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
                }) 
            : compose

    const enhancers =  composeEnhancers(
        applyMiddleware(...middleware)
    )

    const store = createStore(
        reducers,
        enhancers
    )


export default store
*/