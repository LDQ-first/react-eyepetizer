import React, { Component } from 'react'
import FooterDiv from '../../styled/Footer.js'
import {eyeApi} from '../../api/api.js' 
import classNames from 'classnames'
import ShowQRCode from '../showQRCode/showQRCode.js'


export default class Footer extends Component {

     constructor (props) {
        super(props)
        this.state = {
            isShowQR: false,
            date: new Date().getFullYear() === 2017 ? 2017 : `2017 ~ ${new Date().getFullYear()}`
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
        const {QRCodeUrl, isShowQR, date} = this.state



        return (
            <FooterDiv>
                <p className="copyRight">
                   Copyright {date} © by 
                   <a className="githubUrl" href="https://github.com/LDQ-first" target="_blank" 
                    rel="noopener noreferrer"> LDQ-first </a> 
                    (◕ᴗ◕)
                </p>
                <p className="githubRep">
                    {`source code in Github =>`}
                    <a className="githubRepUrl" href="https://github.com/LDQ-first/react-eyepetizer" target="_blank" 
                    rel="noopener noreferrer">
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-github"></use>
                        </svg>
                    </a> 
                </p>

                {
                    isShowQR 
                    ? <ShowQRCode  QRCodeUrl={QRCodeUrl || ''} _this={this}/> 
                    : null
                }
            </FooterDiv>
        )
    }
}
