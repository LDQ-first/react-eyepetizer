import React, { Component } from 'react'
import getRouter from '../../router/router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="app">
                    {getRouter()}
                </div>
            </MuiThemeProvider>
        )
    }
}
