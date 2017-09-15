import React, { Component } from 'react'
import PropTypes from 'prop-types'
import  ErrorDiv  from '../../styled/Error.js'

export default class Error extends Component {
    static get propTypes() {
        return {
            errorMsg: PropTypes.string.isRequired
        }
    }

    render() {
        const { errorMsg } = this.props
        return (
            <ErrorDiv>
                <h1 className="msg">{errorMsg}</h1>
            </ErrorDiv>
        )
    }
}
