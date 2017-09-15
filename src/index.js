import React from 'react'
import ReactDom from 'react-dom'
import getRouter from './router/router'
import {AppContainer} from 'react-hot-loader'
import configureStore from './redux/store'
import {Provider} from 'react-redux'
import App from './components/App/App'
import { fromJS } from 'immutable'
import './styled/index'

const initialState = fromJS({})
const store = configureStore(initialState)

/*const store = configureStore*/

const renderWithHotReload = (RootElement) => {
    ReactDom.render(
        <AppContainer>
            <Provider store={store}>
                <RootElement/>
            </Provider>
        </AppContainer>, 
    document.getElementById('app'))
}


/*初始化*/
renderWithHotReload(App)

/*热更新*/
if (module.hot) {
    module.hot.accept('./components/App/App', () => {
        const NextApp = require('./components/App/App').default
        renderWithHotReload(NextApp)
    })
}



