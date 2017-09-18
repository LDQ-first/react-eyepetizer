import React, { Component } from 'react'
import ReturnIndexDiv from '../../styled/ReturnIndex.js'
import {Btn} from '../../styled/ReturnIndex.js'
import FlatButton from 'material-ui/FlatButton'

export default class ReturnIndex extends Component {
    render() {
        return (
            <ReturnIndexDiv>
                <FlatButton
                href="/"
                label="Eyepetizer"
                labelStyle = { Btn }
                />
            </ReturnIndexDiv>
        )
    }
}
