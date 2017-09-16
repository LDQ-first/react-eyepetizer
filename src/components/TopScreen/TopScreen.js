import React, { Component } from 'react'
import TopScreenDiv from '../../styled/topscreen.js'
import IconButton from 'material-ui/IconButton'
import ShowQRCode from '../showQRCode/showQRCode.js'




export default class TopScreen extends Component {

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

        return (
            <TopScreenDiv>
                <div className="menu">
                    <IconButton className="wechat" 
                    onClick={() => {this._showQRCode('//static.kaiyanapp.com/eyepetizer-web/assets/images/index/landing_wechat_account.53f45180.jpg')}}>
                    </IconButton>
                </div>
                {
                    isShowQR 
                    ? <ShowQRCode  QRCodeUrl={QRCodeUrl || ''} _this={this}/> 
                    : null
                }
            </TopScreenDiv>
        )
    }
}
