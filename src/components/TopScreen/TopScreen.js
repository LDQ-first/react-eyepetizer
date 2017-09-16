import React, { Component } from 'react'
import TopScreenDiv from '../../styled/topscreen.js'
import IconButton from 'material-ui/IconButton'
import showQRCodeDiv from '../showQRCode/showQRCode.js'




export default class TopScreen extends Component {

    _showQRCode(QRCodeUrl) {
        console.log(QRCodeUrl)
        console.log(this.showQRCode)
        this.setSate({
            QRCodeUrl
        })
    }


    render() {
        const {QRCodeUrl} = this.state

        return (
            <TopScreenDiv>
                <div className="menu">
                    <IconButton className="wechat" 
                    onClick={() => {this._showQRCode('//static.kaiyanapp.com/eyepetizer-web/assets/images/index/landing_wechat_account.53f45180.jpg')}}>
                    </IconButton>
                </div>
                <showQRCodeDiv ref={qr => this.showQRCode = qr} QRCodeUrl={QRCodeUrl}/>
            </TopScreenDiv>
        )
    }
}
