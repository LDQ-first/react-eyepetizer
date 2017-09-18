import React, { Component } from 'react'
import ReturnIndexDiv from '../../styled/ReturnIndex.js'
import {Btn} from '../../styled/ReturnIndex.js'
import FlatButton from 'material-ui/FlatButton'



export default class ReturnIndex extends Component {
    

    render() {
        
    const indexUrl = process.env.NODE_ENV === 'production' 
    ? '/react-allfamily/dist/'
    : '/'
        return (
            <ReturnIndexDiv>
                <FlatButton
                href={indexUrl}
                label="Eyepetizer"
                labelStyle = { Btn }
                />
            </ReturnIndexDiv>
        )
    }
}
