import React, { Component } from 'react'
import { CircularProgress } from 'material-ui/Progress'
import {ProgressDiv} from '../../styled/Loading.js'

export default class Progress extends Component {
    render() {
        return (
            <ProgressDiv>
                <CircularProgress size={50} />     
            </ProgressDiv>
        )
    }
}
