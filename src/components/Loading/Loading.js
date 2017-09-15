import React, { Component } from 'react'
import LoadingDiv from '../../styled/Loading'

export default class Loading extends Component {
    render() {
        return (
            <LoadingDiv> 
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </LoadingDiv>
        )
    }
}
