import React, { Component } from 'react'
import ShowQRCodeDiv from '../../styled/showQRCode.js'



export default class showQRCode extends Component {
    static get propTypes() { 
        return { 
            QRCodeUrl: PropTypes.string.isRequired,
            _this: PropTypes.object.isRequired
        }
    }


    render() {
        const {QRCodeUrl, _this} = this.props

        return (
            <ShowQRCodeDiv>
               <div className="shade" onClick={(e) => {_this._hideQRCode(e, this)}} ref={shade => this.shade = shade}>
                    <div className="qr" >
                        <img className="qrImg" src={QRCodeUrl} />
                        <div>
                            <p className="noMargin">扫描二维码</p>
                            <p className="noMargin">关注「开眼」微信公众号</p>
                        </div>
                    </div>
               </div>
            </ShowQRCodeDiv>
        )
    }
}
