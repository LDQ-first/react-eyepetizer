import React, { Component } from 'react'
import DownloadDiv from '../../styled/Download.js'
import {eyeApi} from '../../api/api.js' 
import FlatButton from 'material-ui/FlatButton'
import ShowQRCode from '../showQRCode/showQRCode.js'


export default class Download extends Component {

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
            <DownloadDiv>
                <div className="intro"></div>
                <div className="download">
                    <div className="icon"></div>
                    <div className="logo"></div>
                    <div className="download-button-list">
                        <button className="ios btn" onClick={() => {this._showQRCode(contact.ios)}}></button>
                        <button className="android btn" onClick={() => {this._showQRCode(contact.android)}}></button>
                    </div>
                </div>
                {
                    isShowQR 
                    ? <ShowQRCode  QRCodeUrl={QRCodeUrl || ''} _this={this}/> 
                    : null
                }
            </DownloadDiv>
        )
    }
}
