import React, { Component } from 'react'
import ShowQRCodeDiv from '../../styled/showQRCode.js'



export default class showQRCode extends Component {
    static get propTypes() { 
        return { 
            QRCodeUrl: PropTypes.string.isRequired,
            _this: PropTypes.object.isRequired,
            msg: PropTypes.string,
        }
    }


    render() {
        const {QRCodeUrl, _this, msg} = this.props

        return (
            <ShowQRCodeDiv>
               <div className="shade" onClick={(e) => {_this._hideQRCode(e, this)}} 
                    ref={shade => this.shade = shade}>
                    <div className="qr" >
                        <img className="qrImg" src={QRCodeUrl} />
                        <div className="qrMsg">
                            <p className="noMargin">扫描二维码</p>
                            <p className="noMargin">{msg}</p>
                        </div>
                    </div>
               </div>
            </ShowQRCodeDiv>
        )
    }
}
