import React, { Component } from 'react'
import TopScreenDiv from '../../styled/topscreen.js'
import IconButton from 'material-ui/IconButton'
import ShowQRCode from '../showQRCode/showQRCode.js'
import {eyeApi} from '../../api/api.js' 



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
        const {contact} = eyeApi

        return (
            <TopScreenDiv>
                <div className="menu">
                    <IconButton className="wechat" 
                    onClick={() => {this._showQRCode(contact.wechat)}}>
                    </IconButton>
                    <a href={contact.weibo} target="_blank">
                        <IconButton className="weibo" />
                    </a>
                     <a href={contact.email} target="_blank">
                        <IconButton className="email" />
                    </a>
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
