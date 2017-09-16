import React, { Component } from 'react'
import showQRCodeDiv from '../../styled/showQRCode.js'



export default class showQRCode extends Component {
    static get propTypes() { 
        return { 
            QRCodeUrl: PropTypes.string.isRequired
        }
    }


    render() {
        const {QRCodeUrl} = this.props


        return (
            <showQRCodeDiv>
                <img src={QRCodeUrl} />
            </showQRCodeDiv>
        )
    }
}
