import React, { Component } from 'react'
import LoadingDiv from '../../styled/Loading'

export default class Loading extends Component {
    render() {
        return (
            <LoadingDiv> 
                <div className="loading">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </LoadingDiv>
        )
    }
}
