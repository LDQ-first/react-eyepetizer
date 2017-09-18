import React, { Component } from 'react'
import FooterDiv from '../../styled/Footer.js'
import {eyeApi} from '../../api/api.js' 
import classNames from 'classnames'
import ShowQRCode from '../showQRCode/showQRCode.js'


export default class Footer extends Component {

     constructor (props) {
        super(props)
        this.state = {
            isShowQR: false
        }
    }


    _showQRCode(QRCodeUrl) {
        this.setState({
            isShowQR: true,
            QRCodeUrl
        })
    }

    _hideQRCode(e, _this) {
/*        console.log(e.target)
        console.log(_this.shade)
        console.log(_this.shade === e.target)*/
        if(_this.shade === e.target) {
            this.setState({
                isShowQR: false,
                QRCodeUrl: ''
            })
        }
    }


    render() {
        const {QRCodeUrl, isShowQR} = this.state
        const {contact} = eyeApi


        return (
            <FooterDiv>
                {
                    isShowQR 
                    ? <ShowQRCode  QRCodeUrl={QRCodeUrl || ''} _this={this}/> 
                    : null
                }
            </FooterDiv>
        )
    }
}
