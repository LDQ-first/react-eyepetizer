import React, { Component } from 'react'
import TopScreenDiv from '../../styled/topscreen.js'
import IconButton from 'material-ui/IconButton'
import ShowQRCode from '../showQRCode/showQRCode.js'
import {eyeApi} from '../../api/api.js' 
import classNames from 'classnames'
import FlatButton from 'material-ui/FlatButton'

export default class TopScreen extends Component {

    constructor (props) {
        super(props)
        this.state = {
            isShowQR: false,
            imgIndex: 0
        }
    }


    
    componentWillMount() {
        this._showBgImg()
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

    _showBgImg() {
        const {imglists} = eyeApi
        let i = 0
        setInterval(() => {
            i = i < imglists.length - 1 ? i + 1 : 0 
            this.setState({
                imgIndex: i
            })
        }, 10000)
    }


    render() {
        const {QRCodeUrl, isShowQR, imgIndex} = this.state
        const {contact, home, imglists, author} = eyeApi


        const Imglists = imglists.map((imglist, index) => {
            return (
                <img key={index} src={imglist} className={classNames('imglist', {hide: index === imgIndex})}/>
            )
        })



        return (
            <TopScreenDiv>
                <div className="menu">
                    <IconButton className="wechat" touch={true}
                    style={{
                        width: 'atuo',
                        height: '36px',
                        padding: '0',
                        margin: '0 0.5rem',
                        background: `url(${eyeApi.spriteShare}) no-repeat 0 -26px/36px`
                    }}
                    onClick={() => {this._showQRCode(contact.wechat)}}>
                    </IconButton>
                    <a href={contact.weibo} target="_blank">
                        <IconButton 
                         style={{
                            width: 'atuo',
                            height: '36px',
                            padding: '0',
                            margin: '0 0.5rem',
                            background: `url(${eyeApi.spriteShare}) no-repeat 0 -63px/36px`
                        }}
                        className="weibo" />
                    </a>
                     <a href={contact.email} target="_blank">
                        <IconButton 
                        style={{
                            width: 'atuo',
                            height: '36px',
                            padding: '0',
                            margin: '0 0.5rem',
                            background: `url(${eyeApi.spriteShare}) no-repeat 0 0/54px`
                        }}
                        className="email" />
                    </a>
                </div>
                <div className="video-wrap">
                    <video autoPlay loop className="video"
                        poster={home.homePoster}
                        src={home.homeVideo}
                    ></video>
                </div>
                <div className="bgImg-list">
                    {Imglists}
                </div>
                <div className="content">
                    <div className="logo"></div>
                    <div className="intro"></div>
                    <div className="download-button-list">
                        <FlatButton className="ios btn" onClick={() => {this._showQRCode(contact.ios)}}></FlatButton>
                        <FlatButton className="android btn" onClick={() => {this._showQRCode(contact.android)}}></FlatButton>
                    </div>
                    <div className="entry-button">
                        <a href={author} target="_blank">
                            <FlatButton className="audit"></FlatButton>
                            <p className="text">作者入口</p>
                        </a>
                    </div>
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
